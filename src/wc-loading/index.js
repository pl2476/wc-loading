import Vue from 'vue'
import merge from 'wc-utils/merge'
import preventPageScroll from 'wc-utils/prevent-page-scroll'
import './css/style.css'

// utils
let appendChild = (parent, child) => {
    parent.appendChild(child);
}
let removeChild = (parent, child) => {
    parent.removeChild(child);
}
let addClass = (el, _class) => {
    el.classList.add(_class);
}
let removeClass = (el, _class) => {
    el.classList.remove(_class);
}

let globalConfig = {};
let instance;

let loading = {
    start(who = 'default') {
        // 如果不存在指定的模板, 报错
        if (typeof globalConfig[who] === 'undefined') {
            throw new Error('wc-loading: please config loading effects');
        }
        // create construnctor
        let LoadingConstructor = Vue.extend(globalConfig[who]);
        // create instance
        let initInstance = () => {
            instance = new LoadingConstructor({
                el: document.createElement('div')
            });
            // 为loading 效果设置水平垂直居中
            addClass(instance.$el, 'wc-loading__center');
            // 防止 loading 效果出现之后, 用户依旧可以操作, 所以加一个锁
            let parent = document.createElement('div');
            addClass(parent, 'wc-loading__lock');
            appendChild(parent, instance.$el);
            // 挂载
            instance.$el = parent;
            appendChild(document.body, instance.$el);
        }
        initInstance();
        // add transition
        addClass(instance.$el, 'wc-fade-enter');
        addClass(instance.$el, 'wc-fade-enter-active');
        // 模拟下一帧, trigger transition
        setTimeout(()=> {
            removeClass(instance.$el, 'wc-fade-enter');
        }, 50);
        // transition end, remove transition class
        instance.$el.addEventListener('transitionend', ()=> {
            removeClass(instance.$el, 'wc-fade-enter-active');
        }, false);
        // 当 loading 出现之后, 阻止页面滚动
        preventPageScroll.prevent();
    },
    stop() {
        // add transition
        addClass(instance.$el, 'wc-fade-leave-active');
        
        // transition end
        // 删除 loading
        // 恢复页面, 使其可滚动. 
        instance.$el.addEventListener('transitionend', ()=> {
            removeChild(document.body, instance.$el);
            preventPageScroll.recover();
        }, false);
    }
}
export default {
    install(Vue, options = {}) {
        globalConfig = options;
        Vue.prototype.$loading = loading;
    }
}
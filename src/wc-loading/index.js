import Vue from 'vue'
import merge from 'wc-utils/merge'
import preventPageScroll from 'wc-utils/prevent-page-scroll'

import './css/style.css'

let globalConfig = {};
let instance;

let forbiddenScroll = e => e.preventDefault();

let loading = {

    start(who) {
        // 如果用户没有提前配置 loading, 报错
        if (typeof who === 'undefined') {
            who = 'default';
        }
        if (typeof globalConfig[who] === 'undefined') {
            throw new Error('wc-loading: please config loading effects');
        }

        let LoadingConstructor = Vue.extend(globalConfig[who]);
        let initInstance = () => {
            instance = new LoadingConstructor({
                el: document.createElement('div')
            });
            // 创建母公司
            let parent = document.createElement('div');
            parent.appendChild(instance.$el);

            // add center class
            instance.$el.classList.add('wc-loading__center');

            instance.$el = parent;
            document.body.appendChild(instance.$el);
        }
        initInstance();
        // 防止自定义的字段没有设置默认值
        // instance.show = true;

        // 显示元素
        // 减少使用者的约束, 直接通过控制属性, 而不是要求用户添加 show 字段.
        instance.$el.style.display = 'block';

        // 设置 mask 的 rgba
        if (globalConfig.rgba) {
            instance.$el.style.backgroundColor = globalConfig.rgba;
        }

        // 为根元素添加 lock class
        instance.$el.classList.add('wc-loading__lock');

        // 阻止滚动
        preventPageScroll.prevent();
    },
    // 隐藏 loading
    stop() {
        // instance.show = false;
        instance.$el.style.display = 'none';
        // 恢复原状
        preventPageScroll.recover();
    }
}
export default {
    install(Vue, options = {}) {
        globalConfig = options;
        Vue.prototype.$loading = loading;
    }
}
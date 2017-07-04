import Vue from 'vue'
import App from './App'

import LoadingComponent from './wc-loading/wc-loading-effects/Loading-Option'
import Loading from './wc-loading'

Vue.use(Loading, {
	component: LoadingComponent
});

import {Toast} from 'wc-messagebox'
import 'wc-messagebox/style.css'
Vue.use(Toast);


new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
})
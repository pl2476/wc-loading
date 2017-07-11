import Vue from 'vue'
import App from './App'

import LoadingComponent from './wc-loading-effects/Loading-Option'
import LoadingPage from './wc-loading-effects/Loading-Circle'
import Loading from './wc-loading'

Vue.use(Loading, {
	default: LoadingPage,
	page: LoadingPage,
});

import {Alert} from 'wc-messagebox'
import 'wc-messagebox/style.css'
Vue.use(Alert);


new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
})
import Vue from 'vue'
import App from './App'

import LoadingComponent from './wc-loading-effects/Loading-Option'
import LoadingPage from './wc-loading-effects/Loading-Circle2'
import Loading from './wc-loading'

Vue.use(Loading, {
	default: LoadingPage,
	page: LoadingPage,
	// rgba: 'rgba(0,0,0,0.3)'
});

import {Toast} from 'wc-messagebox'
import 'wc-messagebox/style.css'
Vue.use(Toast);


new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
})
import Vue from 'vue'
import App from './App'

import LoadingComponent from './wc-loading-effects/Loading1'
import Loading from './wc-loading'

Vue.use(Loading, {
	component: LoadingComponent,
	// rgba: 'rgba(0,0,0,0.5)'
});

new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
})
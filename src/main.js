import Vue from 'vue'
import App from './App'

import Spinner from './wc-spinner'
Vue.use(Spinner);

new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
})

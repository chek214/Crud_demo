require('./bootstrap')

import Vue from 'vue'
import App from './Views/App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'

const app = new Vue({
    el: '#app',
    render: h => h(App)
})

export default app
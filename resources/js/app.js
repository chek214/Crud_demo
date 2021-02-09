require('./bootstrap')

import Vue from 'vue'
import App from './Views/App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.component('NoteCard', require('./Components/NoteCard.vue').default)

const app = new Vue({
    el: '#app',
    render: h => h(App)
})

export default app
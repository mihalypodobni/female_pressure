import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import store from './store'
import axios from 'axios'
import {library} from '@fortawesome/fontawesome-svg-core'

import {
    faTwitter,
    faFacebook,
    faWordpress,
    faBandcamp,
    faMixcloud,
    faInstagram,
    faVimeo,
    faTumblr,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faTwitter, faBandcamp, faFacebook, faWordpress, faMixcloud, faInstagram, faVimeo, faTumblr, faYoutube, faUser)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.$hostname = process.env.NODE_ENV === 'development' ?
    `${window.location.protocol}//${window.location.hostname}:8080` :
    `${window.location.protocol}//${window.location.host}`


new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')

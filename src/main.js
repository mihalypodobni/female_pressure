import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import store from './store'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faTwitter,
    faFacebook,
    faSoundcloud,
    faMixcloud,
    faInstagram,
    faVimeo,
    faTumblr,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faTwitter, faFacebook, faSoundcloud, faMixcloud, faInstagram, faVimeo, faTumblr, faYoutube)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')

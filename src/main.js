import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";
import store from "./store";
import axios from "axios";
import {library} from "@fortawesome/fontawesome-svg-core";

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
} from "@fortawesome/free-brands-svg-icons";
import {faUserCircle, faCog} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(
    faTwitter,
    faBandcamp,
    faFacebook,
    faWordpress,
    faMixcloud,
    faInstagram,
    faVimeo,
    faTumblr,
    faYoutube,
    faUserCircle,
    faCog
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

Vue.prototype.$http = axios;
Vue.prototype.$hostname =
    process.env.NODE_ENV === "development"
        ? `${window.location.protocol}//${window.location.hostname}:3000`
        : `${window.location.protocol}//${window.location.host}`;

axios.interceptors.request.use(
    config => {
        const token = store.state.authentication.jwt;
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        if (response.headers.authorization && response.headers.authorization.includes("NewToken")) {
            store.commit('authentication/SET_TOKEN',response.headers.authorization.slice(9, response.headers.authorization.length))
        }
        return response
    },
    error => {
        if (error.response.status === 401 && error.response.config && !error.response.config.__isRetryRequest) {
            delete axios.defaults.headers.common['Authorization']
            if (error.response.data.Error === 'VialServer Error') {
                location.reload()
            }
        }
        return Promise.reject(error);
    }
);

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount("#app");

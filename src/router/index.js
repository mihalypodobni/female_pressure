import Vue from "vue"
import Router from "vue-router"
import store from '@/store/index.js'
import routes from '@/router/routes/index.js'
Vue.use(Router)

//avoid redundant navigation
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(() => {
    });
};

const router = new Router({
    mode: "history",
    routes: [].concat(routes)
})

router.beforeEach(async (to, from, next) => {
    const authenticated = store.state.user.authenticated
    const admin = store.state.user.admin

    const onlyLoggedOutPage = to.matched.some(record => record.meta.onlyLoggedOut)
    const isPublicPage = to.matched.some(record => record.meta.public)
    const isAdminPage = to.matched.some(record => record.meta.admin)

    store.dispatch('verify').then(() => {
        //no jwt token, user can only go to public and onlyLoggedOut pages, otherwise directed back to home screen
        //TODO user can also be directed to 'You have to be logged in to do that' page - update home routes
        if (!authenticated) {
            if (isPublicPage || onlyLoggedOutPage) {
                next();
            } else {
                next({name: 'Home'});
            }
        } else {
            if (admin) { //if user is admin, they only have access to admin pages
                if (isAdminPage) {
                    next() // admin is trying to access admin page or the home page, connect
                } else {
                    next({name: 'AdminHome'}); // admin is trying to access any other page on site, do not allow
                }
            } else if (isAdminPage) {
                next({name: 'Home'}); //non-admin trying to access admin page - redirect to home
            } else if (!isPublicPage || isPublicPage) {
                next() //non-admin accessing private / public page - connect
            } else if (onlyLoggedOutPage) {
                next({name: 'Home'}); //user is logged in and tries to access only logged out page - redirect to home
            } else {
                next() //all other requests, although this line should not be executed
            }
        }
    }, error => {
        console.log(error)
        next()
        //TODO more might be needed here
    })
})

export default router;

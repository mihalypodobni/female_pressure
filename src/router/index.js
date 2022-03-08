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
    routes: [].concat(routes),
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return { x: 0, y: 0 }
    }
})

console.log('router', router);

router.beforeEach(async (to, from, next) => {
    let l = router.resolve(to);
    if (l.resolved.matched.length > 0) {
        const authenticated = store.state.authentication.authenticated
        const admin = store.state.authentication.admin

        const onlyLoggedOutPage = to.matched.some(record => record.meta.onlyLoggedOut)
        const isPublicPage = to.matched.some(record => record.meta.public)
        const isAdminPage = to.matched.some(record => record.meta.admin)

        store.dispatch('authentication/verify').then(() => {
            if (!authenticated) { //no jwt token, user can only go to public and onlyLoggedOut pages
                if (isPublicPage || onlyLoggedOutPage) {
                    next();
                } else {
                    next({name: 'Unauthorized'});
                }
            } else {
                if (admin) { //if user is admin, they only have access to admin pages
                    if (isAdminPage) {
                        next() // admin is trying to access admin page or the home page, connect
                    } else {
                        next({name: 'Admin Home'}); // admin is trying to access any other page on site, do not allow
                    }
                } else if (isAdminPage) {
                    next({name: 'Unauthorized'}); //non-admin trying to access admin page - redirect to unauthorized
                } else if (onlyLoggedOutPage) {
                    next({name: 'Unauthorized'}); //user is logged in and tries to access only logged out page - redirect to unauthorized
                } else if (!isPublicPage || isPublicPage) {
                    next() //non-admin accessing private / public page - connect
                } else {
                    next() //all other requests, although this line should not be executed
                }
            }
        }, error => {
            console.log(error)
            next()
            //TODO more might be needed here
        })
    } else {
        next({name: 'Not Found'});
    }
})

export default router;

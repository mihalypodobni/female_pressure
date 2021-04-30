import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/components/homePage/Home'),
        },
        {
            path: '/special_projects',
            name: 'Special Projects',
            component: () => import('@/components/specialProjects/SpecialProjects'),
        },
    ]
})

export default router
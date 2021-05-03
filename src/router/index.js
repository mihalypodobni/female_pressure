import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/components/home/Home'),
        },
        {
            path: '/search',
            name: 'Search',
            component: () => import('@/components/search/SearchHome'),
        },
        {
            path: '/projects',
            name: 'Projects',
            component: () => import('@/components/specialProjects/SpecialProjectsHome'),
        },
        {
            path: '/merch',
            name: 'Merch',
            component: () => import('@/components/merch/MerchHome'),
        },
        {
            path: '/links',
            name: 'Links',
            component: () => import('@/components/links/LinksHome'),
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('@/components/about/AboutHome'),
        },
        {
            path:'/press',
            name:'Press',
            component: ()=> import('@/components/about/Press'),
        },
        {
            path: '/events',
            name: 'Events',
            component: () => import('@/components/events/EventsHome'),
        },
    ]
})

export default router
const routes = [
    {
        path: "/admin-home",
        name: "Admin Home",
        component: () => import("@/components/admin/AdminHome"),
    },
]

export default routes.map(route => {
    const meta = {
        public: false,
        onlyLoggedOut: false,
        admin: true
    }
    return { ...route, meta }
})
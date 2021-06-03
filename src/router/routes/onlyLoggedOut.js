const routes = [
    {
        path: "/join-network",
        name: "Join Network",
        component: () => import("@/components/join/JoinHome"),
    },
]

export default routes.map(route => {
    const meta = {
        public: true,
        onlyLoggedOut: true,
        admin: false
    }
    return { ...route, meta }
})
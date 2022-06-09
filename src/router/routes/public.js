const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("@/components/home/HomeComp"),
	},
	{
		path: "/search",
		name: "Search",
		component: () => import("@/components/search/SearchHome"),
	},
	{
		path: "/projects",
		name: "Projects",
		component: () => import("@/components/specialProjects/SpecialProjectsHome"),
	},
	{
		path: "/links/:category?",
		name: "Links",
		component: () => import("@/components/links/LinksHome"),
		alias: "/links/:category",
	},
	{
		path: "/about",
		name: "About",
		component: () => import("@/components/about/AboutHome"),
	},
	{
		path: "/events",
		name: "Events",
		component: () => import("@/components/events/EventsHome"),
	},
	{
		path: "/merch",
		name: "Merch",
		component: () => import("@/components/merch/MerchHome"),
	},
	{
		path: "/explore",
		name: "Explore",
		component: () => import("@/components/explore/ExploreHome"),
	},
	{
		path: "/code_of_conduct",
		name: "CoC",
		component: () => import("@/components/codeOfConduct/CodeOfConductHome"),
	},
	{
		path: "/blog",
		name: "Blog",
		component: () => import("@/components/blog/BlogHome"),
	},
	{
		path: "/faq",
		name: "FAQ",
		component: () => import("@/components/faq/FAQHome"),
	},
	{
		path: "/feedback",
		name: "Feedback",
		component: () => import("@/components/feedback/FeedbackHome"),
	},
	{
		path: "/gdpr",
		name: "GDPR",
		component: () => import("@/components/gdpr/GDPRHome"),
	},
	{
		path: "/401-unauthorized",
		name: "Unauthorized",
		component: () => import("@/components/util/401Unauthorized"),
	},
	{
		path: "/404-not-found",
		name: "Not Found",
		component: () => import("@/components/util/404NotFound"),
	},
	{
		path: "/user/:id",
		name: "User Profile",
		component: () => import("@/components/userProfile/UserProfileHome"),
	},
];

export default routes.map((route) => {
	const meta = {
		public: true,
		onlyLoggedOut: false,
		admin: false,
	};
	return { ...route, meta };
});

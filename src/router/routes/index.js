import publicRoutes from '@/router/routes/public.js'
import privateRoutes from '@/router/routes/private.js'
import adminRoutes from '@/router/routes/admin.js'
import onlyLoggedOutRoutes from '@/router/routes/onlyLoggedOut.js'

export default publicRoutes.concat(privateRoutes, adminRoutes, onlyLoggedOutRoutes)
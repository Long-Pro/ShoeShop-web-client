// pages
import { ProductDetail, Home } from '../pages'

// layout
import { MainLayout } from '../layouts'

const publicRoutes = [
  { path: '/', component: Home, layout: MainLayout },
  { path: '/product-detail', component: ProductDetail, layout: MainLayout },
]
const privateRoutes = [{}]

export { publicRoutes, privateRoutes }

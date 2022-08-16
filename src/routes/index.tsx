// pages
import { ShoeDetail, Home } from '../pages'

// layout
import { MainLayout } from '../layouts'

const publicRoutes = [
  { path: '/', component: Home, layout: MainLayout },
  { path: '/Shoe-detail', component: ShoeDetail, layout: MainLayout },
]
const privateRoutes = [{}]

export { publicRoutes, privateRoutes }

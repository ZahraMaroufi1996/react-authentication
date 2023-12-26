import DefaultLayout from 'layouts/Default'
import AddProduct from 'pages/add-product'
import ContactUsPage from 'pages/contact-us'
import Dashboard from 'pages/dashboard'
import EditProduct from 'pages/edit-product'
import LoginPage from 'pages/login'
import ProductsList from 'pages/products-list'

const indexRoutes = [{ path: '/', component: DefaultLayout }]

const AppRoutes = [
  {
    path: '/dashboard',
    name: 'داشبورد',
    icon: 'fa fa-tachometer-alt',
    component: Dashboard,
    showInNav: true,
  },
  {
    path: '/all-products',
    name: 'همه محصولات',
    icon: 'fa fa-list',
    component: ProductsList,
    showInNav: true,
  },
  {
    path: '/add-product',
    name: 'افزودن محصول',
    icon: 'fa fa-plus',
    component: AddProduct,
    showInNav: true,
  },
  {
    path: '/products/edit/:id',
    name: 'ویرایش محصولات',
    component: EditProduct,
    showInNav: false,
  },
  {
    path: '/login',
    name: 'ورود',
    icon: 'fa fa-plus',
    component: LoginPage,
    showInNav: false,
  },
  {
    path: '/contact-us',
    name: 'ارتباط با ما',
    icon: 'fa fa-phone',
    component: ContactUsPage,
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true },
]

export default AppRoutes

export { indexRoutes }

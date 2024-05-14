import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ForgotPassowrd from '../pages/ForgotPassowrd'
import SignUp from '../pages/SignUp'
import AdminPanel from '../pages/AdminPanel'
import AllUsers from '../pages/AllUsers'
import AllProducts from '../pages/AllProducts'
import CategoryProduct from '../pages/CategoryProduct'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import SearchProduct from '../pages/SearchProduct'
import WomenProducts from '../components/women'
import MenComponent from '../components/men'
import KidsComponent from '../components/kids'
import ContactUS from '../pages/mesagehelp'
import MessageAdmin from '../pages/messageadmin'
import HelloWorld from '../pages/t'




const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [

            {
                path : "test",
                element : <HelloWorld/>
            },
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "forgot-password",
                element : <ForgotPassowrd/>
            },
           
            {
                path : "sign-up",
                element : <SignUp/>
            },
            {
                path : "WomenProducts",
                element : <WomenProducts/>
            },
            {
                path : "contact",
                element : <ContactUS/>
            },

            {
                path : "product-category",
                element : <CategoryProduct/>
            },
            {
                path : "product/:id",
                element : <ProductDetails/>
            },
            {
                path : 'cart',
                element : <Cart/>
            },
           
            {
                path : "search",
                element : <SearchProduct/>
            },
          
            {
                path : "men",
                element : <MenComponent/>
            },
            {
                path : "kids",
                element : <KidsComponent/>
            },
            {
                path : "admin-panel",
                element : <AdminPanel/>,
                children : [
                    {
                        path : "all-users",
                        element : <AllUsers/>
                    },
                    {
                        path : 'contact',
                        element : <MessageAdmin/>
                    },
                    {
                        path : "all-products",
                        element : <AllProducts/>
                    }
                ]
            },
        ]
    }
])


export default router
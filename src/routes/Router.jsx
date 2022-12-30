import { createBrowserRouter } from "react-router-dom";

import { Error404 } from "../components/pages/Error404/Error404";
import Home from "../components/pages/Home/Home";
import Products from "../components/pages/Products/Products";
import Product from "../components/pages/Product/Product";
import Layout from "../components/templates/Layout/Layout";
import Category from "../components/pages/Category/Category";
import { CartPage } from "../components/pages/Cart/Cart";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout />, 
        errorElement: <Error404/>,
        children:[
        {
            index:true,
            element: <Home />, 
            errorElement: <Error404/>
        },    
        {
            path:"/products",
            element: <Products />, 
            errorElement: <Error404/>
        },
        {
            path: "/products/:id",
            element: <Product />,
        },
        {
            path: "/category/:id",
            element: <Category />,
        },
        {
            path: "/cart",
            element: <CartPage />,
        },
        ]
    },
    {
        path:"/login",
        element: <Login />, 
        errorElement: <Error404/>
    },
    {
        path:"/register",
        element: <Register />, 
        errorElement: <Error404/>
    },

])
export default router;
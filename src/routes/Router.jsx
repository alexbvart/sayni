import { createBrowserRouter } from "react-router-dom";

import { Error404 } from "../components/pages/Error404/Error404";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import Products from "../components/pages/Products/Products";
import Layout from "../components/templates/Layout/Layout";

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
        ]
    },
    {
        path:"/login",
        element: <Login />, 
        errorElement: <Error404/>
    },

])
export default router;
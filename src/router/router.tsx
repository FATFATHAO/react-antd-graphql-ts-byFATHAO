import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Layout from "../pages/Layout/Layout";
import About from "../pages/About/About";
import Regesiter from "../pages/Regesiter/Regesiter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: "/Login",
                element:<Login></Login>,
            },
            {
                path: "/Regesiter",
                element: <Regesiter></Regesiter>
            },
            {
                path: "/About",
                element: <About></About>,
            }
        ]
    }
])


export default router;
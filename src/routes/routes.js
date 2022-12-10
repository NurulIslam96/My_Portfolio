import { createBrowserRouter } from "react-router-dom";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/projects',
                element:<Projects></Projects>
            }
        ]
    }
])
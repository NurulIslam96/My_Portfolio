import { createBrowserRouter } from "react-router-dom";
import BuyTop from "../components/BuyTop";
import Contact from "../components/Contact";
import Dentisia from "../components/Dentisia";
import Home from "../components/Home";
import LearningPoint from "../components/LearningPoint";
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
            },
            {
                path:'/buytop',
                element:<BuyTop></BuyTop>
            },
            {
                path:'/dentisia',
                element:<Dentisia></Dentisia>
            },
            {
                path:'/learningpoint',
                element:<LearningPoint></LearningPoint>
            }
        ]
    }
])
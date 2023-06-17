import {
    createBrowserRouter,        
  } from "react-router-dom";
import Main from "../layout/Main";
import Intro from "../Component/intro/Intro";
import Service from "../Component/services/Service";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        // {
        //     path: '/',
        //     element: <Intro></Intro>
        // },
        // {
        //     path: '/',
        //     element: <Service></Service>
        // }
      ]
    },
  ]);
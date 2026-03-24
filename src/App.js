  import React from "react";
  import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import AppBody from "./components/AppBody";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Error from './components/Error';
import About from './components/About';
import Contact from "./components/Contact";
import ResCard from "./components/ResCard";
import ResDeatils from "./components/ResDeatils";

  // const newEle=React.createElement("div",{},[React.createElement("h1",{id:'heading',key:'1'},"hello"),React.createElement("h2",{key:'2'},"world")]);
  const AppLayout=()=>{
    return (<div>
    <Header/>
    <Outlet/>
    </div>)
   }
   const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>,
      children:[{
       path:'/about',
      element:<About/>,
    },
    {
      path:'/restaurant/:id',
      element:<ResDeatils/>
    },
    {
path:'/',
element:<AppBody/>
    },
  {
       path:'/contact',
      element:<Contact/>,
    }
  ],
      errorElement:<Error/>
    },

   ])
  
  const root=ReactDOM.createRoot(document.getElementById('root'));
    // root.render(JSXheading);
    root.render(<RouterProvider router={appRouter}/>);

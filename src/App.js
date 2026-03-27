  import React, { lazy, Suspense, useEffect, useState } from "react";
  import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import AppBody from "./components/AppBody";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Error from './components/Error';
// import About from './components/About';
import Contact from "./components/Contact";

import ResDeatils from "./components/ResDeatils";
import UserContext from "./utils/UserContext";
const About=lazy(()=>import('./components/About'))
  // const newEle=React.createElement("div",{},[React.createElement("h1",{id:'heading',key:'1'},"hello"),React.createElement("h2",{key:'2'},"world")]);
  const AppLayout=()=>{
    const [userInfo,setUserInfo]=useState("");
    // useEffect(()=>{
    //   setUserInfo("koushik");
    // })
    return (<div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
    <UserContext.Provider value={{userName:userInfo,setUserInfo}}>
    <Header/>
    <div className="pt-1">

    <Outlet/>
    
    </div>
    </UserContext.Provider>
    </div>)
   }
   const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>,
      children:[{
       path:'/about',
      element:<Suspense fallback={<><h1>Loading about....</h1></>}><About/></Suspense>,
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

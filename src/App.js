  import React from "react";
  import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import AppBody from "./components/AppBody";

  // const newEle=React.createElement("div",{},[React.createElement("h1",{id:'heading',key:'1'},"hello"),React.createElement("h2",{key:'2'},"world")]);
  const AppLayout=()=>{
    return (<div>
    <Header/>
    <AppBody/>
    </div>)
   }
   
  
  const root=ReactDOM.createRoot(document.getElementById('root'));
    // root.render(JSXheading);
    root.render(<AppLayout/>);

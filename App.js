  import React from "react";
  import ReactDOM from "react-dom/client";
  const newEle=React.createElement("div",{},[React.createElement("h1",{id:'heading',key:'1'},"hello"),React.createElement("h2",{key:'2'},"world")]);
    
  
  
  const root=ReactDOM.createRoot(document.getElementById('root'));
    root.render(newEle);
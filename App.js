  import React from "react";
  import ReactDOM from "react-dom/client";
  // const newEle=React.createElement("div",{},[React.createElement("h1",{id:'heading',key:'1'},"hello"),React.createElement("h2",{key:'2'},"world")]);
    const JSXheading=(<h1>Namaste React </h1>);
    const Title=()=>{
      return (<h1>Title</h1>)
    }
    const HeadingComponent=()=>{
    return (<div id='container'>
<Title/>
<h2>sub header</h2>
    </div>)
    }
  
  const root=ReactDOM.createRoot(document.getElementById('root'));
    // root.render(JSXheading);
    root.render(<HeadingComponent/>);

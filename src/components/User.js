import { useState } from "react";

const User=({name,location})=>{
    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(1);

    return (<>
    <h1>{name},{location},{count},{count2}</h1>
     <button onClick={()=>{
        setCount(count+1)
    }}>Counter</button>
    </>)
}
export default User;
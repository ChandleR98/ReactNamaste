import { useState } from "react";
import { RES_OBJ } from "../utils/MockData";
import ResCard from "./ResCard";


 const AppBody=()=>{
    const [resList,setResList]=useState(RES_OBJ);
    const [allFlag,setAllFlag]=useState(false);
return(
<>
  <button className="top-btn" onClick={()=>{
    const filteredList=RES_OBJ?.filter((item)=>item?.info?.avgRating>4.3);
    setResList(filteredList);
    setAllFlag(true);
  }}>Top Rated Restaurants</button>
 {allFlag && <button className="top-btn" onClick={()=>{
    
    setResList(RES_OBJ);
    setAllFlag(false)
  }}>See All Restaurants</button>}
<div className="bodyContainer">
  
 {resList?.map((item)=>{
  return (<ResCard key={item?.info?.id} resData={item}/>)
 })}

</div></>)
  }
  export default AppBody;
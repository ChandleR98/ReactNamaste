import { useEffect, useState } from "react";
import { MENU } from "./MockData";

const useResMenu=(id)=>{
    const [resInfo,setResInfo]=useState({});
      const fetchMenu=async()=>{
       
        const data=await fetch(`${MENU}${id}/menu`);
        const jsonData=await data.json();

       setResInfo(jsonData);
        
    }
    useEffect(()=>{
        fetchMenu();
    },[id])
    return resInfo;
}
export default useResMenu;
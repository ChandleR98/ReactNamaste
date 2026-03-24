import { useParams } from "react-router";
import { MENU } from "../utils/MockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const ResDeatils=()=>{
    const {id}=useParams();
    const[itemList,setItemList]=useState([]);
    const fetchMenu=async()=>{
       
        const data=await fetch(`${MENU}${id}/menu`);
        const jsonData=await data.json();

       setItemList(jsonData);
        
    }
    useEffect(()=>{
        fetchMenu();
    },[id])
    return(<>
    <h3>Following Items Are Available</h3>
    {itemList?.length >0 ? 
    <div className="resDeatils">
        
        {itemList?.map((item)=>{
            return (<div key={item.itemID} className="itemDetails">
                <img src={item.imageUrl} style={{width:'200px',height:'200px' }}alt='food'/>
                <h4>{item.itemName}</h4>
                <h4>{item.itemDescription}</h4>
                <h4>{item.itemPrice}</h4>
            </div>)
        })}
    </div> : <Shimmer/>}
    </>)
}
export default ResDeatils;
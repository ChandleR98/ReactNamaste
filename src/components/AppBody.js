import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";


 const AppBody=()=>{
    const [resList,setResList]=useState([]);
    const[masterList,setMasterList]=useState([]);
    const [searchText,setSearchText]=useState('');
    const fetchData=async()=>{
        try{
        const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const jsonData=await data.json();
        setResList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setMasterList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        }catch{(e)=>{
            console.log(e)
        }}
    }
    useEffect(()=>{
        fetchData()
    },[])
const searchRes=()=>{
 const filtered=masterList?.filter((item)=>item?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
        setResList(filtered)
}
return(
<>

    <input className="search" type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} onKeyDown={(e)=>{
        if(e.key=='Enter'){
            searchRes();
        }
    }}/>
    <button className="top-btn" onClick={()=>{
       searchRes()
    }}>Search</button>

  <button className="top-btn" onClick={()=>{
    const filteredList=masterList?.filter((item)=>item?.info?.avgRating>4.3);
    setResList(filteredList);
    
  }}>Top Rated Restaurants</button>
 
 {resList?.length>0 ? <div className="bodyContainer">
  
 {resList?.map((item,index)=>{
  return (<Link key={item?.info?.id} to={`/restaurant/${index+1}`}><ResCard key={item?.info?.id} resData={item}/></Link>)
 })}

</div> : <Shimmer/>}</>)
  }
  export default AppBody;
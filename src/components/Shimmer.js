const Shimmer=()=>{
    const temp=[1,2,3,4,5,6,7,8,9,10]
return(<div className="bodyContainer">
  
 {temp.map((item,index)=>{
    return (<div key={index} className="resCard-shimmer">
    
     </div>)
 })}


</div>)
}
export default Shimmer;
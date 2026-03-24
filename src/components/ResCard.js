import { CDN_IMAGE } from "../utils/MockData";

 const ResCard=({resData})=>{
    const info=resData?.info;
    return(<div className="resCard">
   <img className="logo" alt='logo' src={`${CDN_IMAGE}${info?.cloudinaryImageId}`}/>
    <h3>{info?.name}</h3>
    <h4>{info?.avgRating || 0} . {info?.isOpen ? 'Open' : 'Closed'} </h4>
    <h4>{info?.cuisines?.join(",")}</h4>
    <h4>{info?.locality}</h4>
    </div>)
  }
  export default ResCard;
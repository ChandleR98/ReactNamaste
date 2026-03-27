import { CDN_IMAGE } from "../utils/MockData";

const ResCard = ({ resData }) => {
  const info = resData;
  
  return (
    <div className="w-72 bg-white dark:bg-gray-800 
                    rounded-2xl shadow-md dark:shadow-gray-900/40
                    hover:shadow-2xl hover:-translate-y-1 
                    transition duration-300 overflow-hidden cursor-pointer">
      
      {/* Image (optional - kept commented) */}
      {/* <img
        className="w-full h-40 object-cover"
        alt="restaurant"
        src={`${CDN_IMAGE}${info?.cloudinaryImageId}`}
      /> */}

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        
        {/* Name */}
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 truncate">
          {info?.restaurantName}
        </h3>

        {/* Status */}
        <span
          className={`text-sm font-medium flex items-center gap-1 ${
            info?.parkingLot
              ? "text-green-600 dark:text-green-400"
              : "text-red-500 dark:text-red-400"
          }`}
        >
          {info?.parkingLot ? "🟢 Open" : "🔴 Closed"}
        </span>

        {/* Type */}
        <h4 className="text-gray-600 dark:text-gray-300 text-sm">
          {info?.type}
        </h4>

        {/* Address */}
        <p className="text-gray-500 dark:text-gray-400 text-xs line-clamp-2">
          {info?.address}
        </p>
      </div>
    </div>
  );
};
export const withPromotedLabel=(ResCard)=>{
  return (props)=>{
    return(  <div className="relative">
        
        {/* Label */}
        <h1 className="absolute top-2 right-20 
                       bg-black text-white 
                       text-xs px-2 py-1 
                       rounded-md z-10 shadow">
          Promoted
        </h1>
      <ResCard {...props}/>
    </div>)
  }
}
export default ResCard;
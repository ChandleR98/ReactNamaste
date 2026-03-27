import { useParams } from "react-router";

import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu";
import Accordion from "./Accordion";
import { useState } from "react";

const ResDeatils = () => {
  const { id } = useParams();
  const itemList = useResMenu(id);
  const accordionCount=[1,2,3];
  const [activeIndex, setActiveIndex] = useState(null)
  return (
    <>
      {/* 🔝 Header */}
      <div className="detailHeader px-6 py-4 border-b 
                      bg-white dark:bg-gray-900 
                      shadow-sm dark:border-gray-700
                      transition-colors duration-300">
        
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          {itemList?.[0]?.restaurantName}
        </h2>

        <h4 className="text-gray-500 dark:text-gray-400 mt-1">
          🍽️ Following Items Are Available
        </h4>
      </div>

      {itemList?.length > 0 ? (<>
        <div className="resDeatils flex flex-wrap gap-6 p-6 justify-center">
          
          {itemList?.map((item) => {
            return (
              <div
                key={item.itemID}
                className="itemDetails w-72 
                           bg-white dark:bg-gray-800 
                           rounded-2xl shadow-md dark:shadow-gray-900/40
                           hover:shadow-2xl hover:-translate-y-1 
                           transition duration-300 overflow-hidden"
              >
                
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt="food"
                  className="w-full h-40 object-cover"
                />

                {/* Content */}
                <div className="p-4 flex flex-col gap-2">
                  
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {item.itemName}
                  </h4>

                  <h4 className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                    {item.itemDescription}
                  </h4>

                  <h4 className="text-green-600 dark:text-green-400 font-bold mt-2">
                    ₹{item.itemPrice}
                  </h4>

                </div>
              </div>
            );
          })}
         
        </div>
         {<div>
            {accordionCount?.map((item,index)=>{
              return (<Accordion  key={item} itemList={itemList} show={activeIndex==index} setShow={()=>{
                index==activeIndex ? setActiveIndex(null) : setActiveIndex(index)
              }}/>)
            })}
            </div>}
        </>
      ) : (
        <Shimmer />
      )}
    </>
  );
};

export default ResDeatils;
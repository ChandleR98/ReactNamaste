import { useState } from "react";

const Accordion=({itemList,show,setShow})=>{
    return (<div className="m-4" >

       <div
  className="flex justify-between items-center 
             px-4 py-3 m-auto w-9/12
             bg-gray-100 dark:bg-gray-800 
             hover:bg-gray-200 dark:hover:bg-gray-700
             cursor-pointer 
             rounded-t-2xl
             transition duration-300" 
             onClick={()=>{setShow()}}
>
  <h3 className="text-md font-semibold text-gray-800 dark:text-gray-100">
    Accordion
  </h3>

  <span className="text-gray-600 dark:text-gray-300 transition-transform duration-300">
    {show ? '⬆️' : '⬇️'}
  </span>
</div>
{show && <div className="flex p-4 m-2 justify-center">
            {itemList?.map((item) => {
            return (
              <div
                key={item.itemID}
                className="itemDetails w-72 mx-4
                           bg-white dark:bg-gray-800 
                           rounded-2xl shadow-md dark:shadow-gray-900/40
                           hover:shadow-2xl hover:-translate-y-1 
                           transition duration-300 overflow-hidden"
              >
                
                {/* Image */}
               

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
          })}</div>}
    </div>)
}
export default Accordion;
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearItems } from "../utils/cartSlice";
import Shimmer from "./Shimmer";
import Accordion from "./Accordion";
import { useState } from "react";

const Cart = () => {
  const itemList = useSelector((store) => store.cart.items);
   const accordionCount=[...new Set(itemList?.map((item)=>item.restaurantName))];
    const [activeIndex, setActiveIndex] = useState(null)
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      
      {/* Header */}
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        🛒 Your Cart Items ~ Rs.({itemList?.reduce((total,item)=>{
            return total+item?.itemPrice
        },0)})
      </h1>

      {itemList?.length > 0 ? (
        <>
         {<div>
            {accordionCount?.map((item,index)=>{
                console.log(item)
              return (<Accordion  key={item} itemList={itemList?.filter((itm)=>itm.restaurantName==item)} show={activeIndex==index} setShow={()=>{
                index==activeIndex ? setActiveIndex(null) : setActiveIndex(index)
              }}/>)
            })}
            </div>}
             <div className="flex justify-center gap-4 mt-8">
            
            <button
              className="bg-red-500 text-white px-5 py-2 rounded-lg 
                         hover:bg-red-600 active:scale-95 transition"
              onClick={() => dispatch(clearItems())}
            >
              Clear Cart
            </button>

            <button
              className="bg-gray-700 text-white px-5 py-2 rounded-lg 
                         hover:bg-gray-800 active:scale-95 transition"
              onClick={() => dispatch(removeItem())}
            >
              Remove Last Item
            </button>
          </div>
        </>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default Cart;
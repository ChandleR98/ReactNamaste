import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearItems:(state)=>{
            state.items.length=0;
        },
        removeSpecificItem:(state,action)=>{
            state.items=state.items.filter((item)=>item.itemID!=action.payload)
        }
    }
})
export const {addItem,removeItem,clearItems,removeSpecificItem} = cartSlice.actions;
export default cartSlice.reducer;
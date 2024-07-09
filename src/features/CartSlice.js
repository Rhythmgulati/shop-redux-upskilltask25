import { createSlice , nanoid} from "@reduxjs/toolkit";
import { Cart } from "../components/Cart";

const initialState = {
    cartitems:[]
}

export const CartSlice = createSlice({
    name:"cartslice",
    initialState,
    reducers:{
        additem: (state,action)=>{
           const existingItem = state.cartitems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartitems.push({ ...action.payload, quantity: 1 });
      }
            },
        removeitem:(state,action)=>{
            state.cartitems = state.cartitems.filter(item => item.id !== action.payload);
              },
              increment:(state,action)=>{
                state.cartitems = state.cartitems.map(item=>item.id===action.payload?{ ...item, quantity: item.quantity + 1 } : item)
                  // console.log(cart);
              },
              decrement:(state,action)=>{
                const existingItem =state.cartitems.find(item => item.id === action.payload);
               if (existingItem.quantity === 1) {
                state.cartitems.filter(item => item.id !== action.payload);
              } else {
              state.cartitems = state.cartitems.map(item=>item.id===action.payload?{ ...item, quantity: item.quantity - 1 } : item)
              }
              
                
              }
    },
})

export const { additem, removeitem , increment, decrement } = CartSlice.actions;


export default CartSlice.reducer
import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items:[],
        totalQuantity :0,
        changed: false
    },
    reducers:{
        replaceCart(state, action){
            state.totalQuantity = action.payload.totalQuantity
            state.items = action.payload.items
        },

        addItemToCart(state, action){
            const newItem = action.payload
            const exitingitem = state.items.find((item)=> item.id === newItem.id)
            state.totalQuantity++;
            state.changed = true;

            if(!exitingitem){
                state.items.push({
                    id: newItem.id,
                    price:newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                name:newItem.title,
                isEngrave: newItem.isEngrave
            });
            }
            else{
                exitingitem.quantity++;
                exitingitem.totalPrice = exitingitem.totalPrice + newItem.price
            }

        },
        RemoveItemFromCart(state, action){
            const id = action.payload;
            const exitingitem = state.items.find((item)=> item.id === id);
            state.totalQuantity--;
            state.changed = true;

            if (exitingitem.quantity === 1) {
                state.items = state.items.filter(item=> item.id !== id)
            } 
            else{
                exitingitem.quantity--
                exitingitem.totalPrice = exitingitem.totalPrice - exitingitem.price
            }

        },
        resetCart(state){
            state.items = []
            state.totalQuantity = 0
            state.changed = false

        }
      
    }
});


export const cartActions = cartSlice.actions;

export default cartSlice;
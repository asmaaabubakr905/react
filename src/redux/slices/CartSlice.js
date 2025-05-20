import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            let index = state.cart.findIndex((item) => item.id == action.payload.id);
            if (index > -1) {
                state.cart[index].q += 1;
            }
            else
                state.cart.push({ ...action.payload, q: 1 });
        },
        removeFromCart: (state, action) => {
            state.cart.splice(action.payload.index, 1)
            console.log("delete from cart")
        },
        increaseQuantity: (state, action) => {
            const item = state.cart.find(item => item.id == action.payload.id);
            if (item) {
                item.q += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.cart.find(item => item.id == action.payload.id);
            if (item && item.q > 1) {
                item.q -= 1;
            }
        },

    }
})


export const { addToCart, removeFromCart,increaseQuantity,decreaseQuantity } = cartSlice.actions
export default cartSlice.reducer
// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice=createSlice({
//     name:"cart",
//     initialState:{cart:[]},
//     reducers:{
//         addToCart:(state,action)=>
//         {
//             state.cart.push(action.payload)

//             console.log(state.cart.length)
//         },
//         removeFromCart:(state,action)=>{
//          state.cart.splice(action.payload.index,1)
//             console.log("delete from cart")
//         }


//     }
// })


// export const  {removeFromCart,addToCart}=cartSlice.actions


// export default cartSlice.reducer;
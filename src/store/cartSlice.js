import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {

    try {
        const data = localStorage.getItem("cartItems");
        if (data) {
            const items = JSON.parse(data);
            return items;
        }
        return [];
    }
    catch (error) {
        console.log("Error in fetching cart items list data from local Storage ;");
        return [];
    }
}


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: getInitialState() || [],

    },
    reducers: {
        addToCart: (state, action) => {

            state.items.push(action.payload);

            try {
                localStorage.setItem("cartItems", JSON.stringify(state.items));
            }
            catch (error) {
                console.log("Can't add product in cart items in local Storage");
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id != action.payload);
            try {
                localStorage.setItem("cartItems", JSON.stringify(state.items));
            }
            catch (error) {
                console.log("Can't remove product update cart items in local Storage");
            }
        },
        clearCart: (state) => {
            state.items = [];
            try {
                localStorage.setItem("cartItems", "[]");
            }
            catch (error) {
                console.log("Error in clearing cart data in local storage");
            }
        }
    },
})


export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
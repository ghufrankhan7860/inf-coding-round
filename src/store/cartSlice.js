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
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].count += 1;
            } else {
                const newItem = { ...action.payload, count: 1 };
                state.items.push(newItem);
            }

            try {
                localStorage.setItem("cartItems", JSON.stringify(state.items));
            }
            catch (error) {
                console.log("Can't add product in cart items in local Storage");
            }
        },
        removeFromCart: (state, action) => {
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            if (existingItemIndex !== -1) {
                if (state.items[existingItemIndex].count > 1) {
                    state.items[existingItemIndex].count -= 1;
                } else {
                    state.items = state.items.filter((item) => item.id != action.payload.id);
                }
                try {
                    localStorage.setItem("cartItems", JSON.stringify(state.items));
                }
                catch (error) {
                    console.log("Can't remove product update cart items in local Storage");
                }
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
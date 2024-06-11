import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            const existingItem = state.cartItems.find(
                (cartItem) => cartItem.id === action.payload.id
            );
            if (!existingItem) {
                state.cartItems.push({ ...action.payload, amount: 1 });
                state.amount += 1;
            }
            state.total = state.cartItems.reduce((total, item) => total + item.price * item.amount, 0);
        },
        remove: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id
            );
            state.amount = state.cartItems.reduce((amount, item) => amount + item.amount, 0);
            state.total = state.cartItems.reduce((total, item) => total + item.price * item.amount, 0);
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find(
                (cartItem) => cartItem.id === action.payload.id
            );
            if (cartItem) {
                cartItem.amount -= 1;
                if (cartItem.amount === 0) {
                    state.cartItems = state.cartItems.filter(
                        (item) => item.id !== action.payload.id
                    );
                }
            }
            state.amount = state.cartItems.reduce((amount, item) => amount + item.amount, 0);
            state.total = state.cartItems.reduce((total, item) => total + item.price * item.amount, 0);
        },
        calculateTotal: (state) => {
            state.total = state.cartItems.reduce((total, item) => total + item.price * item.amount, 0);
        }
    }
});

export const { add, remove, decrease, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;

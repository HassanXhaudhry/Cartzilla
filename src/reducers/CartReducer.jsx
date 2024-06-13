import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0
};

const calculateTotals = (cartItems) => {
    const amount = cartItems.reduce((acc, item) => acc + item.amount, 0);
    const total = cartItems.reduce((acc, item) => acc + item.price * item.amount, 0);
    return { amount, total };
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            const existingItem = state.cartItems.find((cartItem) => cartItem.id === action.payload.id);
            if (!existingItem) {
                state.cartItems.push({ ...action.payload, amount: 1 });
            }
            const totals = calculateTotals(state.cartItems);
            state.amount = totals.amount;
            state.total = totals.total;
        },
        remove: (state, action) => {
            state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
            const totals = calculateTotals(state.cartItems);
            state.amount = totals.amount;
            state.total = totals.total;
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find((cartItem) => cartItem.id === action.payload.id);
            if (cartItem && cartItem.amount > 1) {
                cartItem.amount -= 1;
            }
            const totals = calculateTotals(state.cartItems);
            state.amount = totals.amount;
            state.total = totals.total;
        },
        increase: (state, action) => {
            const cartItem = state.cartItems.find((cartItem) => cartItem.id === action.payload.id);
            if (cartItem) {
                cartItem.amount += 1;
            }
            const totals = calculateTotals(state.cartItems);
            state.amount = totals.amount;
            state.total = totals.total;
        },
        calculateTotal: (state) => {
            const totals = calculateTotals(state.cartItems);
            state.amount = totals.amount;
            state.total = totals.total;
        }
    }
});

export const { add, remove, decrease, increase, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;

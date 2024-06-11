import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/CartReducer'

export const store = configureStore({
    reducer:{
        cart: cartReducer,
    }
});
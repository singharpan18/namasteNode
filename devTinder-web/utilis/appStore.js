import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./createSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default appStore;


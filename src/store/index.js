import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from "./sampleSlice";

export const store = configureStore({
    reducer:{
        counter:sampleReducer,

    }
})
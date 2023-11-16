import { createSlice } from "@reduxjs/toolkit";

const sampleSlice = createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        increment:(state)=>state.value + 1,
    }
})

export const {increment} = sampleSlice.actions;
export default sampleSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    initialState: {// Define initialState as an object and is a state 
          count: JSON.parse(localStorage.getItem("count")) ||  0,
        }, 
    name: 'counter', // name of slice 
    reducers: {
        increment: (state) => { 
            state.count += 1; 
            localStorage.setItem("count", JSON.stringify(state.count));
        },
        decrement: (state) => { 
            state.count -= 1; 
            localStorage.setItem("count", JSON.stringify(state.count));
        },
    },
});

export const { increment, decrement } = counterSlice.actions; // export event/action
export default counterSlice.reducer; // Corrected export statement

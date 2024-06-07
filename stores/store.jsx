import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../Slices/counter/counterSlice';  // name of reducer
import todoSlice from '../Slices/counter/todoSlice';  // name of reducer
import ApiCallingSlice from '../Slices/counter/ApiCallingSlice'; // name of reducer

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoSlice,
    fetchTodos: ApiCallingSlice,
 
  },
});

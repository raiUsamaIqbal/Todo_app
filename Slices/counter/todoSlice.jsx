import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  initialState: {
    // Define initialState 
    todos: JSON.parse(localStorage.getItem("todos")) || [],
  },
  name: "todo",
  // name of slice
  reducers: {
    // here we define our function
    addTodo: (state, action) => {
      state.todos.unshift(action.payload); // push the item in an array
     localStorage.setItem("todos", JSON.stringify(state.todos));
   
    },

    RemoveTodo: (state, action) => {
      const newItem = state.todos.filter((item, index) => {
        return index !== action.payload;
      });
      state.todos = newItem; 
      localStorage.setItem("todos", JSON.stringify(state.todos)); 

    },
  },
});

export const { addTodo, RemoveTodo } = todoSlice.actions;
export default todoSlice.reducer; 

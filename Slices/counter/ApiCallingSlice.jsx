import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";   // when to use asyncthunk delay task perform 


//action when we dispatch the action of fetchTod then call the Api and then convert in json
 export const fetchTodosApi  = createAsyncThunk("fetchTodos", async()=> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();

});

export const ApiCallingSlice = createSlice({
 name:'fetchTodos',
 initialState:{
 isLoading:false,
 isError:false,
 dataApi:null
 },
  extraReducers: (builder) =>{  // with the help of builder we fetch the changes of todo
   builder.addCase(fetchTodosApi.fulfilled, (state, action) =>{
     state.isLoading = false;
     state.data = action.payload;
   });
   builder.addCase(fetchTodosApi.pending, (state, action) =>{
    state.isLoading = true;
  });

  builder.addCase(fetchTodosApi.rejected, (state, action) =>{
    console.log("error", action.payload)
    state.isError = true;
  });
  },

  reducers: {

    },
});


export default ApiCallingSlice.reducer; 

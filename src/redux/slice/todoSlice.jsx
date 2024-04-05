import { createSlice } from '@reduxjs/toolkit'
import { TodoList } from '../actions/todo';


const initialState = {
 todoList : [],
 
}

export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(TodoList.fulfilled, (state, action) => {
        state.todoList = action.payload
    });
}
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = todoSlice.actions

export default todoSlice.reducer
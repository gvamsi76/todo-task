import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../slice/userSlice'
import todoSlice from '../slice/todoSlice'

export const store = configureStore({
  reducer: {
    userSlice :userSlice,
    todoSlice:todoSlice
  },
})
import { createSlice } from '@reduxjs/toolkit'
import { getAllUsers } from '../actions/users';

const initialState = {
 allusersList : [],
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
        state.allusersList = action.payload
    });
}
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer
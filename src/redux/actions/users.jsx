import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const getAllUsers = createAsyncThunk('userSlice', async (body) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    console.log(response.data ,"resssssssss")
    return response.data
});

// Action creators are generated for each case reducer function

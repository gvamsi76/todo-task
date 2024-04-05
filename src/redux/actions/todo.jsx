import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const TodoList = createAsyncThunk('todoSlice', async (body) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${body?.userId}${body.completed !==undefined ? `&completed=${body.completed}` : ''}`)
    return response.data
});
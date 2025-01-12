import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{id: 1, text : 'helloworld'}]
}

export const todoSlice = createSlice({
  name : 'todo',
  initialState ,
  reducers : {
    addTodo : () => {},
    removeTpdp :() => {},
  }
})

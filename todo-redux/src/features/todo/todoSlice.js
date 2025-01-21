import { createSlice, nanoid } from "@reduxjs/toolkit";

// initial state (each slice)
const initialState = {
  todos: []
}

export const todoSlice = createSlice({
  name: 'todo', // name of the slice
  initialState,  // initial state (each slice)
  reducers: {  //reducers (properties)
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer
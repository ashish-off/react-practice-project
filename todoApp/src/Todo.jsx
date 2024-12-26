import React from 'react'
import { useState } from 'react'
import "./style.css";

const Todo = () => {
const [input, setInput] = useState("")
const [todos, setTodos] = useState([]);



function removeTodo(id) {
  setTodos(todos => todos.filter((t) => t.id !== id))
}

const handleSubmit = () =>{

  setTodos(todos => {
    return todos.concat({
      text: input,
      id: Math.floor(Math.random( )* 100),
    })
  })
  setInput("");
}

  return (
    
    <div className="container">

      <input type="text" placeholder='write new todo' value={input}
        onChange={e => {
          setInput(e.target.value)   
       }}

       onKeyUp={e=> {        
        if(e.key === 'Enter' && input.trim()){
          handleSubmit()
        }
       }}
       />

       <button onClick={handleSubmit}>Submit</button>

       <ul className="todo-list">
        {todos.map(({text, id}) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>X</button>
          </li>
        ))}
       </ul>
    </div>
  )
}

export default Todo
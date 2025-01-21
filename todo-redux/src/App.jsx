import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-zinc-900'>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
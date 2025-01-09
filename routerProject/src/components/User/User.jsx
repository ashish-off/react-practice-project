import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {userid} = useParams();

  return (
    <div className='text-3xl text-purple-600 bg-cyan-400 text-center'>User here id: {userid}</div>
  )
}

export default User
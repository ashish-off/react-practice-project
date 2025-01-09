import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  // const [data , setdata] = useState([])

  // useEffect(() =>{
  //   async function fetchData() {
  //     const response = await fetch('https://api.github.com/users/ashish-off')
  //     const jsonData = await response.json()
  //     setdata(jsonData)      
  //   }
  //   fetchData()
  // },[])

  const data = useLoaderData();

  return (
    <div className='text-4xl text-center'> 
    <h2 className='underline'>Github : {data.name} </h2>
    <h2>github id : {data.login}</h2>
    Github Followers : {data.followers}
      <img className='my-2 mx-auto' src={data.avatar_url} alt="img" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/ashish-off`)
  return await response.json()
}


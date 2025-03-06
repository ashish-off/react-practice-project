import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Api = () => {
    const [data, setData] = useState([]);
  
    const Api = "https://jsonplaceholder.typicode.com/todos";
  
    const getApidata = async () => {
      try {
        const res = await axios.get(Api);
        console.log(res);
        setData(res.data);
      } catch (error) {
        console.log(error);
        
        console.log("Error Message : ", error.message);
        console.log("Error data : ", error.response.data);
        console.log("Error status : ", error.response.status);
      }
    };
    useEffect(() => {
      getApidata();
    }, []);
  
    return (
      <div>
        <h1>API Data</h1>
        {data.map((data) => (
          <li key={data.id}>Title :{data.title}</li>
        ))}
      </div>
    );
}

export default Api
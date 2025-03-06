import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosGet
 = () => {
  const [data, setData] = useState([]);

  const API = axios.create({
    baseURL: "https://67a23a30409de5ed5254bc5d.mockapi.io/ashishaxios",
  });

  // get request
  const getApi = async () => {
    const res = await API.get("");

    try {
      res && console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
      console.log("Error Message : ", error.message);
      console.log("Error data : ", error.response.data);
      console.log("Error status : ", error.response.status);
    }
  };

  useEffect(() => {
    getApi();
  }, []);


  return (
    <div>
      <h1>GET </h1>
      <ul>
        {data.map((data) => (
          <li key={data.id}>
            <p>Id : {data.id}</p>
            <p>Name : {data.name}</p>
            <p>Gender : {data.gender}</p>
            <p>Age : {data.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosGet
;

import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosPut = () => {

  const [data, setData] = useState({});
  const [yes, setYes] = useState(false);

  const API = axios.create({
    baseURL: "https://67a23a30409de5ed5254bc5d.mockapi.io/ashishaxios",
  });

  // post request
  const PutApi = async () => {
    const res = await API.put("/2", {
      name: "ashish saud Put",
      email: "ashish@gmail.com",
      age: "002000",
      description: "Data scientist and machine learning enthusiast.",
      gender: "Male",
    });

    try {
      res && console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    PutApi();
  }, [yes]);
  return (
    <div>
      <h1>put , update</h1>
      <button onClick={() => setYes(!yes)}>PUT</button>
      <ul>
          <li key={data.id}>
            <p>Id : {data.id}</p>
            <p>Name : {data.name}</p>
            <p>Gender : {data.gender}</p>
            <p>Age : {data.age}</p>
          </li>
      </ul>
    </div>
  );
};

export default AxiosPut;

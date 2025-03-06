import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosDelete = () => {

  const [data, setData] = useState({});
  const [yes, setYes] = useState(false);

  const API = axios.create({
    baseURL: "https://67a23a30409de5ed5254bc5d.mockapi.io/ashishaxios",
  });

  // post request
  const deleteApi = async () => {
    const res = await API.delete("/3");

    try {
      res && console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    deleteApi();
  }, [yes]);
  return (
    <div>
      <h1>Delete</h1>
      <button onClick={() => setYes(!yes)}>rerender</button>
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
}

export default AxiosDelete
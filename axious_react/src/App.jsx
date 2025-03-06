import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Api from "./Api";
import AxiosGet from "./AxiosGet";
import AxiosPut from "./AxiosPut";

const App = () => {
  return (
    <div>
      {/* <Api /> */}
      {/* <AxiosGet /> */}
      <AxiosPut />
    </div>
  );
};

export default App;

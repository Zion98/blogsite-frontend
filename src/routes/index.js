import React, { useState, useEffect } from "react";
import { useContext } from "react";
import PrivateRoute from "./privateroutes";
import PublicRoute from "./publicroutes";
import { Context } from "../context/Context";
const Index = () => {
  const { state } = useContext(Context);

  console.log(state.user,"loverman");
  // const test = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : []
//   const [token, setToken] = useState([]);

  // const checkToken=()=>{
  //     const token1= localStorage.getItem("user");

  //     // setToken(token1)
  //     // if(token==null)
  //     // return token
  // }

//   console.log("shaba",token)
//   // }

//   useEffect(() => {
//     // checkToken()
//     const token1 = JSON.parse(localStorage.getItem("user"));
//     setToken(token1);
//   }, [token]);

//   console.log("shaba",token)

  // checkToken()

  return state.user? <PrivateRoute />  : <PublicRoute />;
};

export default Index;

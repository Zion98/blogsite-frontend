import { createContext, useReducer, useEffect } from "react";
import React, { useState } from "react";
import { Reducer, initialState } from "./Reducer";

// const INITIAL_STATE = {
//   user:''|| JSON.parse(localStorage.getItem("user")),
//   isFetching: false,
//   error: false,
// };

const { user, loading, errorMessage } = initialState;

export const Context = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  // const [get, setGet] = useState(
  //   localStorage.getItem("user")
  //     ? localStorage.setItem("user", JSON.stringify(state.user))
  //     : null
  // );

  // let user = localStorage.getItem("user")
  //   ? JSON.parse(localStorage.getItem("user"))
  //   : "";

  // const [get, setGet] = useState(user);
console.log("contexter", state.user)
  // useEffect(() => {

  // }, [user])
  return (
    <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
  );
};

import { createContext, useReducer } from "react";
import React from "react";
import { Reducer, initialState } from "./Reducer";

export const Context = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  // let user = localStorage.getItem("user")
  //   ? JSON.parse(localStorage.getItem("user"))
  //   : "";

console.log("contexter", state.user)
  return (
    <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
  );
};

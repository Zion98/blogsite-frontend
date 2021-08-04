import { createContext, useReducer } from "react";
import React from "react";
import { Reducer } from "./Reducer";

let user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";
const initialState = {
  user: user || "",
  loading: false,
  errorMessage: null,
};

export const Context = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  // useEffect(() => {
  //   if (state.user) {
  //     window.location.href = "/articles";
  //   }
  // },[]);

  console.log("contexter", state.user);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

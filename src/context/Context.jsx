import { createContext, useReducer } from "react";
import React from "react";
import { Reducer } from "./Reducer";

let user = sessionStorage.getItem("user")
  ? JSON.parse(sessionStorage.getItem("user"))
  : null;
const initialState = {
  user: user || "",
  loading: false,
  errorMessage: null,
};

export const Context = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  // console.log("contexter", state.user);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

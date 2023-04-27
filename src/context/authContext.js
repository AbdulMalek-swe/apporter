import React, { createContext, useState, useEffect } from "react";
 
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [login,setLogin] = useState({});
  const loginData = e =>{
      console.log(e);
      localStorage.setItem("access",e?.token?.access)
  }
  return (
    <AuthContext.Provider value={{ loginData }}>
      {children}
    </AuthContext.Provider>
  );
};

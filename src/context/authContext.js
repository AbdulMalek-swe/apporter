import React, { createContext,  } from "react";
import { useCookies } from "react-cookie";
 
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [cookie,setCookie] = useCookies(["token"])
  
  const loginData = async e =>{
      console.log(e);
     await setCookie("token",e?.token?.access,{maxAge:3600*24*3})
      // localStorage.setItem("access",e?.token?.access)
      return e;
  }
  
  return (
    <AuthContext.Provider value={{ loginData  }}>
      {children}
    </AuthContext.Provider>
  );
};

"use client";
import { createContext, useEffect, useState } from "react";

const Context = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const [openCreate, setOpenCreate] = useState(false)  

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      console.log("from context", storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      sessionStorage.setItem("token", token);
    } else {
      sessionStorage.removeItem("token");
    }
  }, [token]);

  return (
    <Context.Provider value={{ user, setUser, token, setToken, openCreate, setOpenCreate }}>
      {children}
    </Context.Provider>
  );
}

export {UserProvider, Context}

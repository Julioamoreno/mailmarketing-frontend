import React, { createContext, useState, useContext, useEffect } from 'react';

const TokenContext = createContext();

export default function TokenProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem("ID"));
    useEffect(()=>{
      setToken(localStorage.getItem("ID"));
    },[token]);

  return (
    <TokenContext.Provider value={{ token, setToken }} >
        {children}
    </TokenContext.Provider>
  );
}

export function useToken(){
    const context = useContext(TokenContext);
    if(!context) throw new Error('UseContext só pode ser usado por dentro de um TokenProvider');
    const { token, setToken } = context;
    return { token, setToken };
}
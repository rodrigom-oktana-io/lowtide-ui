import React, { useState, createContext } from 'react';

const SessionContext = createContext();

const SessionContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <SessionContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {props.children}
    </SessionContext.Provider>
  );
};

export { SessionContextProvider, SessionContext };

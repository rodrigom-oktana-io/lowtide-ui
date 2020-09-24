import React, { useState, createContext, useEffect } from 'react';
import { sessionInfoResponse } from '../mockData';

const SessionContext = createContext();

const SessionContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState(null);

  const getSessionInfo = async () => {
    // TODO: Actual Request
    return sessionInfoResponse;
  };

  useEffect(() => {
    const setNewUsername = async () => {
      const sessionInfo = await getSessionInfo();
      const username = sessionInfo.session.salesforce.auth_response.username;
      setUsername(username);
    };
    setNewUsername();
  }, [isLoggedIn]);

  return (
    <SessionContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, username, setUsername }}
    >
      {props.children}
    </SessionContext.Provider>
  );
};

export { SessionContextProvider, SessionContext };

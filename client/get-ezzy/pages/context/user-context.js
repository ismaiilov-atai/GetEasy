import { createContext, useContext } from 'react';

export const UserContext = createContext();

export function AppWrapper({ children }) {

  let userState = {};
  
  return (
    <UserContext.Provider value={ userState }>
      {
        children
      }
    </UserContext.Provider>
  );
}


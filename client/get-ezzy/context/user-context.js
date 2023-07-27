import { createContext, useEffect, useState } from 'react';
import apiService from '../utils/api-service';

export const UserContext = createContext();

export function AppWrapper({ children }) {

  const [userState, setUserState] = useState({});
  const [isSignedin, setIsSignedin] = useState(async () => {
    await apiService.checkUser().then( _ => {
     setIsSignedin(true);
    }).catch( _ => setIsSignedin(false));
  })
  
  console.log(isSignedin);

  return (
    <UserContext.Provider value={ { 
      userState, setUserState,
      isSignedin, setIsSignedin
      }}>
      {
        children
      }
    </UserContext.Provider>
  );
}


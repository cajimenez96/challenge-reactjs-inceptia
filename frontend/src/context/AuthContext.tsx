import React, { ReactNode, createContext, useMemo, useState } from "react";
import { IAuthContext } from "./type";

interface AuthProviderProps {
  children: ReactNode;
}

const INITIAL_STATE = {
  authenticated: false,
  setAuthenticated: () => {},
  isLoading: false,
  setIsLoading: () => {}
}

export const AuthContext = createContext<IAuthContext>(INITIAL_STATE);

const AuthProvider = ({children}: AuthProviderProps) => {
  const [authenticated, setAuthenticated] = useState<boolean>(INITIAL_STATE.authenticated);
  const [isLoading, setIsLoading] = useState<boolean>(INITIAL_STATE.isLoading);

  const contextValue = useMemo(() => ({ authenticated, setAuthenticated, isLoading, setIsLoading }), [authenticated, setAuthenticated, isLoading, setIsLoading]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;

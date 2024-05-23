import React, { ReactNode, createContext, useMemo, useState } from "react";
import { IAuthContext } from "./type";

interface AuthProviderProps {
  children: ReactNode;
}

const INITIAL_STATE = {
  authenticated: false,
  setAuthenticated: () => {}
}

export const AuthContext = createContext<IAuthContext>(INITIAL_STATE);

const AuthProvider = ({children}: AuthProviderProps) => {
  const [authenticated, setAuthenticated] = useState<boolean>(INITIAL_STATE.authenticated);

  const contextValue = useMemo(() => ({ authenticated, setAuthenticated }), [authenticated, setAuthenticated]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;

import { createContext, useState, useMemo } from "react";
import type { ReactNode } from "react";
import type { AuthContextType, User } from "./auth.types";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const contextValue = useMemo(
    () => ({ user, setUser }),
    [user, setUser]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
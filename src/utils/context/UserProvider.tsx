import type { ReactNode } from "react";
import React, { useState } from "react";
import { UserContext } from "utils/context/userContext";

/**
 * use of context to wrap all child components
 * @param { ReactNode } children
 */
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | undefined>(undefined);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

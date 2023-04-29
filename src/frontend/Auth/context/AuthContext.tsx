import React, { useState, useEffect, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../firebase";

const AuthContext = createContext<any>({});

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<Boolean | null>(null);

  useEffect(() => {
    checkLogin();
  }, []);

  function checkLogin() {
    onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(true);
        // getUserData();
      } else {
        setUser(false);
        // setUserData(null);
      }
    });
  }

  const loggedIn = user!!

  const value = {
    user,
    loggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;

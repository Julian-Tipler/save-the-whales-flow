import React, { useState, useEffect, createContext } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../../firebase";
import { validateEmail } from "./helpers/validateEmail";
import { validatePassword } from "./helpers/validatePassword";

const AuthContext = createContext<any>({});

export function AuthProvider({ children }: any) {
  const [loading, setLoading] = useState<Boolean>(true);
  const [loggedIn, setLoggedIn] = useState<Boolean | null>(null);
  //formState
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (loggedIn === null) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  },[loggedIn]);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = () => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) {
        setLoggedIn(true);
        // getUserData();
      } else {
        setLoggedIn(false);
        // setUserData(null);
      }
    });
    return unsubscribe;
  };

  const login = async () => {
    validateEmail(email);
    validatePassword(password);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
    } catch (error) {
      console.error("Error logging in", error);
    }
  };

  const signup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
    } catch (error) {
      console.error("Error signing up", error);
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  const value = {
    loggedIn,
    loading,
    email,
    setEmail,
    password,
    setPassword,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;

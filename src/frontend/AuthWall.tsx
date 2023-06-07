import React, { useContext } from "react";
import AuthContext from "./auth/context/AuthContext";
import { Auth } from "./auth";
import { Router } from "./Layout/Router";

export const AuthWall = () => {
  const { loggedIn, loading } = useContext(AuthContext);
  if (loading) return <div>Loading...</div>;
  return loggedIn ? <Router /> : <Auth />;
};

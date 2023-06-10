import React, { useContext } from "react";
import AuthContext from "./Auth/context/AuthContext";
import { Auth } from "./Auth";
import { Router } from "./Layout/Router";

export const AuthWall = () => {
  const { loggedIn, loading } = useContext(AuthContext);
  if (loading) return <div>Loading...</div>;
  return loggedIn ? <Router /> : <Auth />;
};

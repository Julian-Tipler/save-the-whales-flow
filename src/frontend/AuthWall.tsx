import React, { useContext } from "react";
import { useAuthContext } from "./Auth/context/AuthContext";
import { Auth } from "./Auth";
import { Router } from "./Layout/Router";

export const AuthWall = () => {
  const { loggedIn, loading } = useAuthContext();
  if (loading) return <div>Loading...</div>;
  return loggedIn ? <Router /> : <Auth />;
};

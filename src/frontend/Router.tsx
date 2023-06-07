import React, { useContext } from "react";
import AuthContext from "./auth/context/AuthContext";
import { Layout } from "./Layout/Layout";
import { Auth } from "./auth";

export const Router = () => {
  const { loggedIn, loading } = useContext(AuthContext);
  if (loading) return <div>Loading...</div>;
  return loggedIn ? <Layout /> : <Auth />;
};

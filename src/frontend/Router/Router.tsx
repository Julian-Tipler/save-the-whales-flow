import React, { useContext } from "react";
import AuthContext from "../Auth/context/AuthContext";
import { Layout } from "../Layout";
import { Login } from "../Auth";

export const Router = () => {
  const { loggedIn, loading } = useContext(AuthContext);
  if (loading) return <div>Loading...</div>;
  // return <MainLayout/>
  return loggedIn ? <Layout /> : <Login />;
};

import React, { useContext } from "react";
import AuthContext from "./Auth/context/AuthContext";
import { MainLayout } from "./MainLayout";
import { Login } from "./Auth";

export const Router = () => {
  const { user, loggedIn } = React.useContext(AuthContext);
  // return <MainLayout/>
  return loggedIn ? <MainLayout /> : <Login />;
};

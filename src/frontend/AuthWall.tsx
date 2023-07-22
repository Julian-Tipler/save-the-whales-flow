import { useAuthContext } from "./auth/context/AuthContext";
import { Auth } from "./auth";
import { Router } from "./layout/Router";
import { Spinner } from "@chakra-ui/react";

export const AuthWall = () => {
  const { loggingIn, loading } = useAuthContext();
  if (loading) return <Spinner />;
  return loggingIn ? <Auth /> : <Router />;
};

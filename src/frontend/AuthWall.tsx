import { useAuthContext } from "./auth/context/AuthContext";
import { Auth } from "./auth";
import { Router } from "./layout/Router";

export const AuthWall = () => {
  const { loggingIn, loading } = useAuthContext();
  if (loading) return <div>Loading...</div>;
  return loggingIn ? <Auth /> : <Router />;
};

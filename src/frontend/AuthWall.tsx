import { useAuthContext } from "./Auth/context/AuthContext";
import { Auth } from "./Auth";
import { Router } from "./Layout/Router";

export const AuthWall = () => {
  const { loggingIn, loading } = useAuthContext();
  if (loading) return <div>Loading...</div>;
  return loggingIn ? <Auth /> : <Router />;
};

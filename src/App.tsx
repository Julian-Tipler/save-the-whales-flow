import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AuthWall } from "./frontend/AuthWall";
import { AuthProvider } from "./frontend/Auth/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <AuthWall />
    </AuthProvider>
  );
}

export default App;

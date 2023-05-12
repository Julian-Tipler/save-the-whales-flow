import { ChakraProvider } from "@chakra-ui/react";
import { MainLayout } from "./frontend/Layout";
import { Router } from "./frontend/Router";
import { AuthProvider } from "./frontend/Auth/context/AuthContext";

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;

import { ChakraProvider } from "@chakra-ui/react";
import { MainLayout } from "./MainLayout";
import { ProtectedRouter } from "./ProtectedRouter";
import { AuthProvider } from "./Auth/context/AuthContext";

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <ProtectedRouter />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;

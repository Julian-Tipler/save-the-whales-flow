import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Router } from "./frontend/Router/Router";
import { AuthProvider } from "./frontend/Auth/context/AuthContext";

const theme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif", 
    heading: "Roboto, sans-serif",
  },
  fontWeights: {
    normal: 400,
    bold: 500,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AuthWall } from "./frontend/AuthWall";
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
  console.log("APP")
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <AuthWall />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;

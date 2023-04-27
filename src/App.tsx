import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import WhaleDetailsPage from "./frontend/WhaleDetails";
import PedigreePage from "./frontend/Pedigree";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PedigreePage />,
    children: [
      
    ]
  },
  { path: "whale/:whaleId", element: <WhaleDetailsPage /> },
  { path: "login", element: <div>login</div> },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;

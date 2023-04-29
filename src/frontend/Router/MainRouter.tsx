import React from "react";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import PedigreePage from "../Pedigree";
import WhaleDetailsPage from "../WhaleDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PedigreePage />,
    children: [],
  },
  { path: "whales/:whaleId", element: <WhaleDetailsPage /> },
]);

export const MainRouter = () => {
  return <RouterProvider router={router} />;
};

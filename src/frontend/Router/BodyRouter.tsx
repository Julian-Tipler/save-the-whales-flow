import React from "react";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import PedigreePage from "../Pedigree";
import WhaleDetailsPage from "../WhaleDetails";

const router = createBrowserRouter([
  {
    path: "pedigrees/:id",
    element: <PedigreePage />,
  },
  { path: "whales/:id", element: <WhaleDetailsPage /> },
]);

export const BodyRouter = () => {
  return <RouterProvider router={router} />;
};

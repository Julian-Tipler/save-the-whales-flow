import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PedigreesIndexPage from "../features/Pedigrees/PedigreesIndex";
import PedigreePage from "../features/Pedigrees/Pedigree";
import WhaleDetailsPage from "../features/Whales";
import { Layout } from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "pedigrees/:id",
        element: <PedigreePage />,
      },
      { path: "pedigrees", element: <PedigreesIndexPage /> },
      { path: "whales/:id", element: <WhaleDetailsPage /> },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};

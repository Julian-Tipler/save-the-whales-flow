import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PedigreesIndexPage from "../views/PedigreesIndex";
import PedigreePage from "../views/Pedigree";
import WhaleDetailsPage from "../views/Whale";
import { Layout } from "./Layout";
import AboutPage from "../views/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "pods/:id",
        element: <PedigreePage />,
      },
      { path: "pods", element: <PedigreesIndexPage /> },
      { path: "whales/:id", element: <WhaleDetailsPage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};

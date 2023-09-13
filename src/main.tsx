import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@/routes/Home";
import ChordsPage from "@/routes/ChordsPage";
import ScalesPage from "@/routes/ScalesPage";
import ErrorPage from "@/routes/ErrorPage";
import "@/styles//main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "chords",
    element: <ChordsPage />,
  },
  {
    path: "scales",
    element: <ScalesPage />,
  },
]);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

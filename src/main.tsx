import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@/routes/home";
import ChordsPage from "@/routes/chords";
import ScalesPage from "@/routes/scales";
import ErrorPage from "@/routes/error";
import ProgressionPage from "@/routes/progression"
import "@/styles//main.scss";
import CirclePage from "./routes/circle";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import IntervalsPage from "./routes/intervals";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "chords",
    element: <ChordsPage />,
    children: [{ path: "all" }, { path: "roman" }, { path: "notes" }],
  },
  {
    path: "scales",
    element: <ScalesPage />,
  },
  {
    path: "progression",
    element: <ProgressionPage />,
  },
  {
    path: "circle",
    element: <CirclePage />,
  },
  {
    path: "intervals",
    element: <IntervalsPage />,
  },
]);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/routes/Home";
import ChordsPage from "@/routes/ChordsPage";
import ScalesPage from "@/routes/ScalesPage";
import ErrorPage from "@/routes/ErrorPage";
import "@/styles//main.scss";
import CirclePage from "./routes/CirclePage";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "circle",
    element: <CirclePage />,
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

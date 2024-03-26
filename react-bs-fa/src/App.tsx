import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import Layout from "./Layout";
import { StoreProvider } from "./StoreProvider";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
]);

function App() {
  return (
    <StoreProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </StoreProvider>
  );
}

export default App;

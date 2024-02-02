import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./Layout/RootLayout";
import { Home } from "./pages/Home";
import { Form } from "./pages/Form";
import { Update } from "./pages/Update";
import { Detail } from "./pages/Detail";
import { FormLayout } from "./Layout/FormLayout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: ":id",
          element: <Detail />,
        },
        {
          path: "form",
          element: <FormLayout />,
          children: [
            {
              index: true,
              element: <Form />,
            },
            {
              path: ":id",
              element: <Update />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/home/Home";
import { Form } from "./Pages/form/Form";
import { UserItem } from "./Components/UserItem/UserItem";
import { Detail } from "./Components/detail/Detail";
import { FormJon } from "./Components/Form/Form";
import { Update } from "./Components/Form/Update";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: <UserItem />,
        },
        {
          path: "/detail",
          element: <Detail />,
        },
      ],
    },
    {
      path: "/form",
      element: <Form />,
      children: [
        {
          index: true,
          element: <FormJon />,
        },
        {
          path: ":id",
          element: <Update />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

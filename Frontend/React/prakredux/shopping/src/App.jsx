import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./home";
import { Deta } from "./deta";

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      element: <Home />,
    },
    {
      path: ":id",
      element: <Deta />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

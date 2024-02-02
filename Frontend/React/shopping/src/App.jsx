import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout/layout";
import { Home } from "./pages/home/home";
import { Cart } from "./pages/cart/cart";
import { Detail } from "./pages/detail/detail";
import { CartDetail } from "./pages/detail/cartDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
          path: "cart",
          element: <Cart />,
          children: [
            {
              path: ":id",
              element: <CartDetail />,
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

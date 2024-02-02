import { ContactLayout } from "./Layout/ContactLayout";
import { RootLayout } from "./Layout/RootLayout";
import { About } from "./Pages/About";
import { Faq } from "./Pages/Help/Faq";
import { Form } from "./Pages/Help/Form";
import { Home } from "./Pages/Home";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { PageNotFound } from "./Pages/PageNotFound";
import { ArticlesLayout } from "./Layout/ArticlesLayout";
import { Articles } from "./Pages/Articles/Articles";
import { ArtilesDetail } from "./Pages/Articles/ArtilesDetail";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="articles" element={<ArticlesLayout />}>
          <Route index element={<Articles />} />
          <Route path=":id" element={<ArtilesDetail />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <>
      <div className="App">
        <RouterProvider router={routes} />
      </div>
    </>
  );
}

export default App;

import { createBrowserRouter } from "react-router";
import App from "../App";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/blogs",
        Component: Blog,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);

export default routes;

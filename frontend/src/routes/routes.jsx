import { createBrowserRouter } from "react-router";
import App from "../App";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import AddBlog from "../pages/Blog/AddBlog/AddBlog";
import ManageBlogs from "../pages/Blog/ManageBlog/ManageBlogs";
import UpdateBlog from "../pages/Blog/ManageBlog/UpdateBlog";
import BlogDetails from "../pages/Blog/BlogDetails";

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
        path: "/blogs/:id",
        Component: BlogDetails,
      },
      {
        path: "/blog/addBlog",
        Component: AddBlog,
      },
      {
        path: "/blog/manageBlog",
        Component: ManageBlogs,
      },
      {
        path: "/blog/edit/:id",
        Component: UpdateBlog,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);

export default routes;

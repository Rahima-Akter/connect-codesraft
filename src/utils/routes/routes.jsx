import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import AboutUs from '../../pages/AboutUs/AboutUs'
import Blog from '../../pages/blog/Blog'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: 'about',
        element: <AboutUs/>
      },
      {
        path: 'blog',
        element: <Blog/>
      },
    ],
  },
]);

export default routes;

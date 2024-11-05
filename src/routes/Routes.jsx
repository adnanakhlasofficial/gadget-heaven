import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ProductCards from "../components/ProductCards";
import ProductDetails from "../components/ProductDetails";
import Branch from "../pages/Branch";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/categories.json"),
        children: [
          {
            path: "/",
            element: <Navigate to="/category/All" />
          },
          {
            path: "/category/:product",
            element: <ProductCards />,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/branch",
        element: <Branch />,
        loader: () => fetch("/branches.json")
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader: () => fetch("../products.json"),
      },
    ],
  },
]);

export default routes;

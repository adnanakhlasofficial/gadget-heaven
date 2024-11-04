import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ProductCards from "../components/ProductCards";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('/categories.json'),
                children: [
                    {
                        path: "/category/:product",
                        element: <ProductCards />,
                        loader: () => fetch('../products.json')
                    }
                ]
            },
            {
                path: "/statistics",
                element: <Statistics />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            }
        ]
    }
])

export default routes;
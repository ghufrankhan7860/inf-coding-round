import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Cart from "./pages/Cart.jsx";
import ProductDescription from "./pages/ProductDescription.jsx";
import Products from "./pages/Products.jsx";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Products />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "desc/:productId",
                element: <ProductDescription />,
            },
        ],
    },
]);
createRoot(document.getElementById("root")).render(
    <RouterProvider router={appRouter} />
);

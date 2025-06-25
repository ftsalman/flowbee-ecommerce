import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import AuthLayout from "../layouts/AuthLayout";
import SignupPage from "../pages/auth/SignupPage";
import HomePage from "../pages/home-page/HomePage";
import { HomeLayout } from "../layouts/HomeLayout";
import ProductViewPage from "../pages/Product-details/ProductViewPage";
import { ProductsPage } from "../pages/products-page/ProductsPage";
import SettingsPage from "../pages/SettingsPage";
import { OrdersHistoryPage } from "../pages/OrdersHistoryPage";
import CartPage from "../pages/CartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/login" replace={true} />,
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: (
          <AuthLayout>
            <LoginPage />
          </AuthLayout>
        ),
      },
      {
        path: "signup",
        element: (
          <AuthLayout>
            <SignupPage />
          </AuthLayout>
        ),
      },
    ],
  },

  {
    path: "/home",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products/:productId",
        element: <ProductViewPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "orders",
        element: <OrdersHistoryPage />,
      },
      {
        path: "cart",
        element: <CartPage/>,
      },
    ],
  },


  {
    path: "/category/:categorySlug",
    element: <ProductsPage />,
  },
]);

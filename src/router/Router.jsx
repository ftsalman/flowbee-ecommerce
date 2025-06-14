import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import AuthLayout from "../layouts/AuthLayout";
import SignupPage from "../pages/auth/SignupPage";
import HomePage from "../pages/home-page/HomePage";
import { HomeLayout } from "../layouts/HomeLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/login" replace={true} />, // redirect to login
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
    element:<HomeLayout/>,  // Layout here
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

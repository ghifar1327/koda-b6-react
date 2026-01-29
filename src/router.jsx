import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./components/layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import DetailProduct from "./pages/DetailProduct";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPwd from "./pages/ForgotPwd";
import AuthLayout from "./components/layouts/AuthLayout";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "product", element: <ProductPage /> },
        { path: "product/detail/:name", element: <DetailProduct /> },
      ],
    },
    {
      element: <AuthLayout />,
      children: [
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
        { path: "forgotPassword", element: <ForgotPwd /> },
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import DetailProduct from "./pages/DetailProduct";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPwd from "./pages/ForgotPwd";
import AuthLayout from "./components/layouts/AuthLayout";
import Payment from "./pages/Payment";
import History from "./pages/History";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import DetailLayout from "./components/layouts/DetailLayout";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "product", element: <ProductPage /> },
      ],
    },
    {
      element: <DetailLayout/>,
      children:[
        { path: "detail/:id/:name", element: <DetailProduct /> },
        {path: "payment", element: <Payment/>},
        {path: "history", element : <History/>},
        {path: "order", element: <Order/>},
        {path:"profile", element: <Profile/>}
      ]
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

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPwd from "./pages/ForgotPwd";
import AuthLayout from "./components/layouts/AuthLayout";
import Payment from "./pages/Payment";
import History from "./pages/History";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import DetailLayout from "./components/layouts/DetailLayout";
import Product from "./pages/Product";
import ProductsPage from "./pages/ProductsPage";
import AdminLayout from "./components/layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/NotfoundPage";
import {
  ProtectedRoute,
  PublicRoute,
} from "./components/layouts/ProtectedRoute";
import AddProductPage from "./pages/AddProductPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PublicRoute>
          <MainLayout />
        </PublicRoute>
      ),
      children: [
        { index: true, element: <HomePage /> },
        { path: "product", element: <ProductsPage /> },
        { path: "detail/:id/:name", element: <Product /> },
      ],
    },
    {
      element: (
        <ProtectedRoute role="user">
          <DetailLayout />
        </ProtectedRoute>
      ),
      children: [
        { path: "payment", element: <Payment /> },
        { path: "history", element: <History /> },
        { path: "order/:id", element: <Order /> },
      ],
    },
    {
      element: <AuthLayout />,
      children: [
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
        { path: "forgotPassword", element: <ForgotPwd /> },
      ],
    },
    {
      path: "admin",
      element: (
        <ProtectedRoute role="admin">
          <AdminLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "products",
          element: <AddProductPage />,
        },
      ],
    },
    { path: "profile", element: <Profile /> },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

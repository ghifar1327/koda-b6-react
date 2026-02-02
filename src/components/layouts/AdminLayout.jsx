import { Outlet } from "react-router";
import Header from "./Header";
import { AuthProvider } from "../../context/AuthContext";

export default function AdminLayout() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Outlet />
      </AuthProvider>
    </>
  );
}

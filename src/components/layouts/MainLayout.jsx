import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import { AuthProvider } from "../../context/AuthContext";

export default function MainLayout() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Outlet />
        <Footer />
      </AuthProvider>
    </>
  );
}

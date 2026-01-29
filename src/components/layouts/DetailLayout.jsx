import React from "react";
import { Outlet } from "react-router";
import { AuthProvider } from "../../context/AuthContext";
import Header from "./Header";
import Footer from "./Footer";

export default function DetailLayout() {
  return (
    <AuthProvider>
      <Header />
      <main className="p-[5%] md:px-[10%] flex flex-col gap-10">
        <Outlet />
      </main>
      <Footer />
    </AuthProvider>
  );
}

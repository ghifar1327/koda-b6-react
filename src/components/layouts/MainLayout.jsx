import React from "react";
import Header from "../layout/Header";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import HomePage from "../../pages/HomePage";

export default function MainLayout() {
  return (
    <>
      <Header/>
      <HomePage/>
      <Footer/>
    </>
  );
}

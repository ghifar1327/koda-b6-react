import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";

export default function MainLayout() {
  return (
    <>
      <Header/>
      {/* <HomePage/> */}
      <ProductPage/>
      <Footer/>
    </>
  );
}

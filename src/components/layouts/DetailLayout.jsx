import { Outlet } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import Header from "./Header";
import Footer from "./Footer";

export default function DetailLayout() {
  return (
    <AuthProvider>
      <Header />
      <main className="p-[5%] md:px-[3%] lg:px-[10%] flex flex-col gap-10">
        <Outlet />
      </main>
      <Footer />
    </AuthProvider>
  );
}

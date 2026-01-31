import { AuthProvider } from "../../context/AuthContext";
import { Outlet, useLocation } from "react-router-dom";

export default function AuthLayout() {
  const location = useLocation()
  return (
    <AuthProvider>
      <main className="grid md:grid-cols-3 h-fit">
        <section className=" hidden md:flex md:col-span-1">
          <img src={`${location.pathname === "/login" ? "/auth1.png" : location.pathname === "/register"? "/auth2.png": location.pathname === "/forgotPassword" ? "/auth3.png": ""}`} alt={"Coffie Shop"} className="w-full" />
        </section>
        <section className="min-h-screen px-[5%] md:px-[10%] md:h-auto md:col-span-2 p-[10%] flex flex-col justify-center gap-8">
          <Outlet/>
        </section>
      </main>
    </AuthProvider>
  );
}

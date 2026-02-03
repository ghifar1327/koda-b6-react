import { Icon, MenuIcon, Search, ShoppingCart } from "lucide-react";
import { Button } from "../common/Button";
import MobileMenu from "./MobileMenu";
import { useContext, useState } from "react";
import { Link, useLocation } from "react-router";
import  AuthContext  from "../../context/AuthContext";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  function toogleButton(e) {
    e.preventDefault();
    setToggle((prev) => !prev);
  }
  return (
    <nav
      className={`w-full z-1000 h-auto left-0 top-0 ${location.pathname != "/" ? "bg-black relative" : "bg-[#0B090921] absolute"} text-white flex justify-between px-[5%] lg:px-[10%] p-3`}
    >
      <section className="flex items-center gap-3 md:gap-10">
        <img src="/logos/coffieWhite.png" alt="" className="h-8" />
        <div className="hidden md:flex">
          <Link to="/">Home</Link>
        </div>
        <div className="hidden md:flex">
          <Link to="/product">Product</Link>
        </div>
      </section>
      <section className="flex items-center gap-5">
        <Link to="">
          <Search size={26} />
        </Link>
        <Link to={`${user ? "/payment": "/login"}`}>
          <ShoppingCart size={26} />
        </Link>
        <Button onClick={toogleButton} size={"flex md:hidden"}>
          <MenuIcon size={26} />
        </Button>
        <div className="hidden md:flex gap-5">
          {user ? (
            <div className="flex items-center gap-5">
              <Button
                onClick={logout}
                border={"border border-red-500"}
                size={"h-10 w-23 bg-red-500"}
              >
                logout
              </Button>{" "}
              <p>{user.fullName}</p>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="border rounded h-10 flex justify-center items-center w-23"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="border border-primary bg-primary flex justify-center items-center rounded h-10 w-23"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </section>
      <MobileMenu onClick={toogleButton} toggle={toggle} />
    </nav>
  );
}

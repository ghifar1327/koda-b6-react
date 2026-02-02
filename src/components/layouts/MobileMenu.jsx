import React, { useContext } from "react";
import { Button } from "../common/Button";
import { Search, XCircle } from "lucide-react";
import Input from "../common/Input";
import { Link } from "react-router";
import  AuthContext from "../../context/AuthContext";

export default function MobileMenu({ toggle, onClick }) {
  const { user, logout } = useContext(AuthContext);
  return (
    <section
      className={`${!toggle && "hidden"} flex flex-col md:hidden fixed inset-0 bg-black/80 z-200 text-black`}
    >
      <div className="bg-white h-screen w-[80%] p-[5%] flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <header className="flex justify-between items-center mb-3">
            <img src="/logos/coffiebrown.png" alt="coffie" className="h-10" />
            <Button size onClick={onClick}>
              <XCircle size={26} color="#ff0000" />
            </Button>
          </header>
          <Input
            label={"Search Product"}
            type={"text"}
            id={"search"}
            placeholder={"Find Product"}
          >
            <Search size={18} />
          </Input>
          <p className="mt-3 ">Menu</p>
          <div className="bg-[#FF8906] h-0.5 w-full"></div>
          <p>Products</p>
          <div className="bg-[#DEDEDE] h-0.5 w-full"></div>
        </div>
        <div className="flex flex-col gap-3">
          {user ? (
            <Button
              onClick={logout}
              border={"border bg-red-500 border-red-500"}
            >
              Logout
            </Button>
          ) : (
            <>
              <Link
                to="/login"
                className="w-full border p-3 text-center rounded"
              >
                Signin
              </Link>
              <Link
                to="/register"
                className="w-full border p-3 text-center rounded bg-primary border-primary"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

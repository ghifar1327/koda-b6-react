import React, { useContext } from "react";
import { Button } from "../common/Button";
import { LogOut, Search, XCircle } from "lucide-react";
import Input from "../common/Input";
import { Link } from "react-router";
import AuthContext from "../../context/AuthContext";

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
          <div className="w-full flex flex-col">
            <Link to={"/profile"} className="border-b-3 p-2 w-full border-gray-300 text-xl hover:border-primary">Profile</Link>
            <Link to={"/"} className="border-b-3 p-2 w-full border-gray-300 text-xl hover:border-primary">Home</Link>
            <Link to={"/product"} className="border-b-3 p-2 w-full border-gray-300 text-xl hover:border-primary">Product</Link>
            <Link to="/history" className="border-b-3 p-2 w-full border-gray-300 text-xl hover:border-primary">History</Link>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {user ? (
            <button
              onClick={logout}
              className="text-red-600 text-xl flex items-center gap-4 border-2 rounded-md hover:bg-red-600 hover:text-white p-1 w-full justify-center"
            >
              <p>Logout </p>
              <LogOut size={17} />
            </button>
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

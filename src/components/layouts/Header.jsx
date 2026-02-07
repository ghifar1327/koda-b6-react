import { Icon, LogOut, MenuIcon, Search, ShoppingCart } from "lucide-react";
import { Button } from "../common/Button";
import MobileMenu from "./MobileMenu";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../../context/AuthContext";
import Modal from "../feature/Modal";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const [showModal , setShowModal] = useState(false)
  const location = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    (() => {
      setToggle(false);
      setShowModal(false)
    })();
  }, [location.pathname]);


  function toogleButton(e) {
    e.preventDefault();
    setToggle((prev) => !prev);
  }
  async function handleLogout() {
    const result = await logout();
  if (result) {
    navigate("/");
  }
  };
  function buttonCart(e){
    e.preventDefault()
    if(user) return navigate("/payment")
      setShowModal(!showModal)
    }

  return user?.role === "admin" ? (
    <nav
      className={`w-full h-auto border-b-2 border-gray-300  flex justify-between px-[5%] p-3`}
    >
      <img src="/logos/coffiebrown.png" alt="" className="h-8" />
      <section className="flex items-center gap-5">
        <Link to="">
          <Search size={26} className="text-gray-400" />
        </Link>
        <Link to={`${user ? "/payment" : "/login"}`}>
          <ShoppingCart size={26} className="text-gray-400" />
        </Link>
        <div className="flex items-center gap-5">
          <section className="relative">
            <button
              onClick={() => setToggle(!toggle)}
              className="cursor-pointer h-10 w-10 flex justify-center border-2 text-xl bg-purple-600 rounded-full"
            >
              <p>{user.fullName.charAt(0)}</p>
            </button>
            <div
              className={`absolute ${!toggle && "hidden"} w-70 p-2 shadow border-primary flex flex-col gap-10 py-5 bg-white text-black rounded-lg right-0 mt-5`}
            >
              <section className="rounded-md h-fit flex flex-col items-center gap-3">
                <div className="rounded-[100%] w-20 h-20 flex overflow-hidden">
                  <img
                    src="/Rectangle3.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="font-semibold text-2xl line-clamp-1">
                  {user.fullName}
                </h1>
                <p className="line-clamp-1 text-gray-400">{user.email}</p>
                <div className=" px-10 w-full text-center flex flex-col">
                  <Link
                    to={"/profile"}
                    className="border-b-3 p-2 w-full border-gray-300 text-xl hover:border-primary"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/history"
                    className="border-b-3 p-2 w-full border-gray-300 text-xl hover:border-primary"
                  >
                    History
                  </Link>
                </div>
              </section>
              <button
                onClick={handleLogout}
                className=" text-red-600 text-xl flex items-center gap-4 border-2 rounded-md hover:bg-red-600 hover:text-white p-1 w-full justify-center"
              >
                <p>Logout </p>
                <LogOut size={17} />
              </button>{" "}
            </div>
          </section>
        </div>
      </section>
    </nav>
  ) : (
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
        <button onClick={buttonCart}>
          <ShoppingCart size={26} />
        </button>
        <button onClick={toogleButton} className="block md:hidden">
          <MenuIcon size={26} />
        </button>
        <div className="hidden md:flex gap-5">
          {user ? (
            <div className="flex items-center gap-5">
              <section className="relative">
                <button
                  onClick={() => setToggle(!toggle)}
                  className="cursor-pointer h-10 w-10 flex justify-center border-2 text-xl bg-purple-600 rounded-full"
                >
                  <p>{user.fullName.charAt(0)}</p>
                </button>
                <div
                  className={`absolute ${!toggle && "hidden"} w-70 p-2 shadow flex flex-col gap-10 py-5 bg-white text-black rounded-lg right-0 mt-5`}
                >
                  <section className="rounded-md h-fit flex flex-col items-center gap-3">
                    <div className="rounded-[100%] w-20 h-20 flex overflow-hidden">
                      <img
                        src="/Rectangle3.png"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h1 className="font-semibold text-2xl line-clamp-1">
                      {user.fullName}
                    </h1>
                    <p className="line-clamp-1 text-gray-400">{user.email}</p>
                    <div className=" px-10 w-full text-center flex flex-col">
                      <Link
                        to={"/profile"}
                        className="border-b-3 p-2 w-full border-gray-300 text-xl hover:border-primary"
                      >
                        Profile
                      </Link>
                      <Link
                        to="/history"
                        className="border-b-3 p-2 w-full border-gray-300 text-xl hover:border-primary"
                      >
                        History
                      </Link>
                    </div>
                  </section>
                  <button
                    onClick={handleLogout}
                    className=" text-red-600 text-xl flex items-center gap-4 border-2 rounded-md hover:bg-red-600 hover:text-white p-1 w-full justify-center"
                  >
                    <p>Logout </p>
                    <LogOut size={17} />
                  </button>{" "}
                </div>
              </section>
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
      <MobileMenu onClick={toogleButton} toggle={toggle} showModal={buttonCart}/>
      <Modal onClick={buttonCart} error={showModal} >
        <div className="text-black">
          <p className="text-xl font-semibold text-gray-600">You haven't signed in</p>
        </div>
        <Button orange onClick={()=> navigate("/login")}>Sign In</Button>
      </Modal>
    </nav>
  );
}

import { Icon, MenuIcon, Search, ShoppingCart } from "lucide-react";
import { Button } from "../common/Button";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

export default function Header() {
    const [toggle, setToggle] = useState(false);
    const home = false
    function toogleButton(e) {
      e.preventDefault();
      setToggle((prev) => !prev);
    }
  return (
    <nav className={`w-full left-0 top-0 ${!home ? "bg-black relative": "bg-[#0B090921] absolute" } text-white flex justify-between px-[5%] lg:px-[10%] p-3`}>
      <section className="flex items-center gap-3 md:gap-10">
        <img src="/logos/coffieWhite.png" alt="" className="h-8"/>
        <div className="hidden md:flex">
          <p>Home</p>
        </div>
        <div className="hidden md:flex">
          <p>Product</p>
        </div>
      </section>
      <section className="flex justify-center gap-5">
        <Button size={"w-fit"}><Search size={26}/></Button>
        <Button icon={ShoppingCart} iconSize={26} size={"w-fit hidden md:flex"}><ShoppingCart size={26}/></Button>
        <Button onClick={toogleButton} size={"flex md:hidden"}><MenuIcon size={26}/></Button>
        <div className="hidden md:flex gap-5">
          <Button border={"border"} size={"h-10 w-23"}>Sign in</Button>
          <Button orange size={"h-10 w-23"}>Sign up</Button>
        </div>
      </section>
      <MobileMenu onClick={toogleButton} toggle={toggle}/>
    </nav>
  );
}

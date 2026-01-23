import { Icon, MenuIcon, Search, ShoppingCart } from "lucide-react";
import { Button } from "../common/Button";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

export default function Header() {
    const [toggle, setToggle] = useState(false);
    function toogleButton(e) {
      e.preventDefault();
      setToggle((prev) => !prev);
    }
  return (
    <nav className="bg-black text-white flex justify-between px-[5%] lg:px-[10%] p-3">
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
        <Button size={"w-fit"} icon={Search} iconSize={26}></Button>
        <Button icon={ShoppingCart} iconSize={26} size={"w-fit hidden md:flex"}></Button>
        <Button icon={MenuIcon} onClick={toogleButton} iconSize={26} size={"flex md:hidden"}/>
        <div className="hidden md:flex gap-5">
          <Button border={"border"} size={"h-10 w-23"}>Sign in</Button>
          <Button orange size={"h-10 w-23"}>Sign up</Button>
        </div>
      </section>
      <MobileMenu onClick={toogleButton} toggle={toggle}/>
    </nav>
  );
}

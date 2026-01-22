import React from "react";
import { Button } from "../common/Button";

export default function Header() {
  return (
    <nav className="bg-black text-white flex justify-between px-[10%] p-3">
      <section className="flex items-center gap-10">
        <img src="/logos/coffieWhite.png" alt="" className="h-8"/>
        <div>
          <p>Home</p>
        </div>
        <div>
          <p>Product</p>
        </div>
      </section>
      <section className="flex justify-center">
        <Button src={"/icons/Search.svg"} size={"w-fit"}></Button>
        <Button src={"/icons/ShoppingCart.png"} size={"w-fit"}></Button>
        <div className="flex gap-5">
          <Button border={"border"} size={"h-10 w-23"}>Sign in</Button>
          <Button orange size={"h-10 w-23"}>Sign up</Button>
        </div>
      </section>
    </nav>
  );
}

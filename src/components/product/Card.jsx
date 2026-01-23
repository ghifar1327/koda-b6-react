import React from "react";
import { Button } from "../common/Button";
import { ShoppingCart } from "lucide-react";

export default function Card({ image, title, description, price, rating }) {
  return (
    <section className="col-span-1">
      <img src={image} alt={title} className="w-full rounded-md" />
      <div className="md:p-3">
        <div className=" md:relative p-3 -top-15 bg-white shadow-2xl rounded-md py-4 flex flex-col gap-2">
          <p className="text-2xl md:text-sm lg:text-xl xl-2xl font-bold">{title}</p>
          <p className="text-sm md:text-[10px] xl:text-sm text-gray-500">{description}</p>
          <div>
            <img src={rating} alt="" />
          </div>
          <p className="text-2xl md:text-sm lg:text-xl xl-2xl font-semibold">IDR {price}</p>
          <div className="flex flex-col md:flex-row gap-3">
            <Button orange size={"p-1 text-xl md:p-0 xl:p-1 md:text-xs xl:text-xl flex-8/3"}>
              Buy
            </Button>
            <Button icon={ShoppingCart} border={"border border-primary"} size={"p-2 md:p-1 w-full"} iconSize={20} iconColor={"#FF8906"}/>
          </div>
        </div>
      </div>
    </section>
  );
}

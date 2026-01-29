import { ArrowRight, Minus, Plus, ShoppingCart, ThumbsUp } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../components/common/Button";
import Card from "../components/product/Card";
import Input from "../components/common/Input";

export default function DetailProduct() {
  const [count, setCount] = useState(0);
  return (
    <main className="p-[5%] md:px-[10%] flex flex-col gap-10">
      <section className="flex flex-col md:flex-row gap-5 w-full">
        <figure className="flex-1/2">
          <div className="w-full">
            <img src="/hazelnut.png" alt="hazelnut" className="w-full mb-3" />
          </div>
          <div className="grid grid-cols-3 gap-3 w-full">
            <img src="/hazelnut.png" alt="hazelnut" className="w-full" />
            <img src="/hazelnut.png" alt="hazelnut" className="w-full" />
            <img src="/hazelnut.png" alt="hazelnut" className="w-full" />
          </div>
        </figure>
        <figcaption className=" w-full flex-1/2">
          <section className=" flex flex-col gap-3 md:gap-1 lg:gap-3 xl:gap-4 mb-5">
            <p className="p-1 px-2 bg-red-500 text-white md:text-xs w-fit rounded-full font-semibold">
              FLASH SALE!
            </p>
            <h1 className="text-5xl md:text-2xl">Hazelnut Latte</h1>
            <div className="flex gap-5 items-center">
              <p className="text-xl md:text-xs lg:text-xl text-red line-through text-red-500">
                IDR 10.000
              </p>
              <p className="text-3xl md:text-xl text-primary">IDR 20.000</p>
            </div>
            <img src="/ratting.png" alt="" className="w-[30%]" />
            <div className="flex items-center text-xl md:text-xs lg:text-lg gap-3 text-gray-500">
              <p>200+ Review</p>
              <p>|</p>
              <p>Recommendation</p>
              <ThumbsUp color="#FF8906" size={18} />
            </div>
            <p className="text-gray-500 text-xl md:text-xs lg:text-lg">
              Cold brewing is a method of brewing that combines ground coffee
              and cool water and uses time instead of heat to extract the
              flavor. It is brewed in small batches and steeped for as long as
              48 hours.
            </p>
            <div className="flex items-center">
              <Button
                onClick={() => {
                  if (count > 0) setCount(count - 1);
                }}
                size={"p-2 md:p-1 lg:p-2 border-2 border-primary"}
              >
                <Minus className="w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6 "/>
              </Button>
              <p className="text-2xl px-3 ">{count}</p>
              <Button onClick={() => setCount(count + 1)} size={"p-2 md:p-1 lg:p-2 border-2 border-primary"} orange>
                <Plus className="w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6 "/>
              </Button>
            </div>
            <label htmlFor="medium" className="text-2xl md:text-xl font-semibold">Choose Size</label>
            <div className="flex gap-3 md:gap-1 text-md md:text-xs lg:text-xl">
                <Input type={"radio"} id={"regular"} name={"cup"} value={"regular"}>Regular</Input>
                <Input type={"radio"} id={"medium"} name={"cup"} value={"medium"}>Medium</Input>
                <Input type={"radio"} id={"large"} name={"cup"} value={"large"}>Large</Input>
            </div>
            <label htmlFor="hot" className="text-2xl md:text-xl font-semibold">Hot/ice</label>
            <div className="flex gap-3 md:gap-1 text-md md:text-xs lg:text-xl">
                <Input type={"radio"} id={"hot"} name={"hot/ice"} value={"hot"}>Hot</Input>
                <Input type={"radio"} id={"ice"} name={"hot/ice"} value={"ice"}>Ice</Input>
            </div>
          </section>
          <section className="flex gap-5 md:gap-3 text-md md:text-xs lg:text-xl mt-10 md:mt-5 lg:mt-10">
            <Button border={"border-2 border-primary"} size={"border-2 p-2 md:p-1 lg:p-2 w-full"} orange>
              Buy
            </Button>
            <Button size={"border-2 p-2 md:p-1 lg:p-2 w-full border-primary"}>
              <ShoppingCart color={"#FF8906"} size={18} />
              <p className="text-primary px-3">add to chart</p>
            </Button>
          </section>
        </figcaption>
      </section>
      <h1 className="text-4xl md:text-5xl text-semibold">
        Recomendation <span className="text-[#8E6447]">For You</span>
      </h1>
      <section className="grid grid-cols-2 md:grid-cols-3 gap-5">
        <Card
          image={"/hazelnut.png"}
          title={"Hazelnut Latte"}
          price={"20.000"}
          discon={"10.000"}
          description={
            "You can explore the menu that we provide with fun and have their own taste and make your day better."
          }
          rating={"/ratting.png"}
        />
        <Card
          image={"/hazelnut.png"}
          title={"Hazelnut Latte"}
          price={"20.000"}
          discon={"10.000"}
          description={
            "You can explore the menu that we provide with fun and have their own taste and make your day better."
          }
          rating={"/ratting.png"}
        /> 
        <div className="hidden md:block">
        <Card
          image={"/hazelnut.png"}
          title={"Hazelnut Latte"}
          price={"20.000"}
          discon={"10.000"}
          description={
            "You can explore the menu that we provide with fun and have their own taste and make your day better."
          }
          rating={"/ratting.png"}
          />
        </div>
      </section>
      <search className="flex justify-center">
        <div className="flex gap-5">
          <Button orange size={"p-2 w-10"} radius={"rounded-full"}>
            1
          </Button>
          <Button
            size={"p-2 w-10 bg-[#E8E8E8] text-[#A0A3BD]"}
            radius={"rounded-full"}
          >
            2
          </Button>
          <Button
            size={"p-2 w-10 bg-[#E8E8E8] text-[#A0A3BD]"}
            radius={"rounded-full"}
          >
            3
          </Button>
          <Button
            size={"p-2 w-10 bg-[#E8E8E8] text-[#A0A3BD]"}
            radius={"rounded-full"}
          >
            4
          </Button>
          <Button orange size={"p-2 w-fit"} radius={"rounded-full"}>
            <ArrowRight color={"#FFFFFF"} />
          </Button>
        </div>
      </search>
    </main>
  );
}

import { ArrowRight, Minus, Plus, ShoppingCart, ThumbsUp } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../components/common/Button";
import Card from "../components/product/Card";

export default function DetailProduct() {
  const [count, setCount] = useState(0);
  return (
    <main className="p-[5%] px-[10%] flex flex-col gap-10">
      <section className="flex gap-5 w-full">
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
          <section className=" flex flex-col gap-3 mb-5">
            <p className="p-1 px-2 bg-red-500 text-white w-fit rounded-full font-semibold">
              FLASH SALE!
            </p>
            <h1 className="text-5xl">Hazelnut Latte</h1>
            <div className="flex gap-5 items-center">
              <p className="text-xl text-red line-through text-red-500">
                IDR 10.000
              </p>
              <p className="text-3xl text-primary">IDR 20.000</p>
            </div>
            <img src="/ratting.png" alt="" className="w-[30%]" />
            <div className="flex items-center gap-3 text-gray-500">
              <p>200+ Review</p>
              <p>|</p>
              <p>Recommendation</p>
              <ThumbsUp color="#FF8906" size={18} />
            </div>
            <p className="text-gray-500">
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
                size={"p-2 border-2 border-primary"}
              >
                <Minus />
              </Button>
              <p className="text-3xl px-3 ">{count}</p>
              <Button
                onClick={() => setCount(count + 1)}
                size={"p-2 border-2 border-primary"}
                orange
              >
                <Plus />
              </Button>
            </div>
              <p className="text-2xl font-semibold">Choose Size</p>
              <div className="flex gap-3">
                <label htmlFor="regular">
                    <p>Regular</p>
                    <input type="radio" name="size" value="regular" id="regular" />
                </label>
                <label htmlFor="medium">
                    <p>Medium</p>
                    <input type="radio" name="size" value="medium" id="medium" />
                </label>
                <label htmlFor="medium">
                    <p>Large</p>
                    <input type="radio" name="size" value="large" id="large" />
                </label>
                </div>
                <p className="text-2xl font-semibold">Hot ice?</p>
                <div className="flex gap-3">
                    <label htmlFor="hot">
                        <p>Hot</p>
                        <input type="radio" name="hot/ice" value="hot" id="hot"/>
                    </label>
                    <label htmlFor="ice">
                        <p>Ice</p>
                        <input type="radio" name="hot/ice" value="ice" id="ice"/>
                    </label>
                </div>
            </section>
            <section className="flex gap-5">
                <Button className="flex gap-5"ton orange >Buy</Button>
                <Button size={"border p-2 w-full border-primary"}><ShoppingCart color={"#FF8906"} size={18}/><p className="text-primary px-3">add to chart</p></Button>
            </section>
        </figcaption>
        </section>
            <h1 className="text-5xl text-semibold">Recomendation <span className="text-[#8E6447]">For You</span></h1>
            <section className="grid grid-cols-3 gap-5">
                <Card image={"/hazelnut.png"} title={"Hazelnut Latte"} price={"20.000"} discon={"10.000"} description={"You can explore the menu that we provide with fun and have their own taste and make your day better."}rating={"/ratting.png"}/>
                <Card image={"/hazelnut.png"} title={"Hazelnut Latte"} price={"20.000"} discon={"10.000"} description={"You can explore the menu that we provide with fun and have their own taste and make your day better."}rating={"/ratting.png"}/>
                <Card image={"/hazelnut.png"} title={"Hazelnut Latte"} price={"20.000"} discon={"10.000"} description={"You can explore the menu that we provide with fun and have their own taste and make your day better."}rating={"/ratting.png"}/>
            </section>
            <search className="flex justify-center">
                <div className="flex gap-5">
                    <Button orange size={"p-2 w-10"} radius={"rounded-full"}>1</Button>
                    <Button size={"p-2 w-10 bg-[#E8E8E8] text-[#A0A3BD]"} radius={"rounded-full"}>2</Button>
                    <Button size={"p-2 w-10 bg-[#E8E8E8] text-[#A0A3BD]"} radius={"rounded-full"}>3</Button>
                    <Button size={"p-2 w-10 bg-[#E8E8E8] text-[#A0A3BD]"} radius={"rounded-full"}>4</Button>
                    <Button orange  size={"p-2 w-fit"} radius={"rounded-full"}><ArrowRight color={"#FFFFFF"}/></Button>
                </div>
            </search>
    </main>
    );
}

import { ArrowRight, Minus, Plus, ShoppingCart, ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../components/common/Button";
import Card from "../components/product/Card";
import Input from "../components/common/Input";
import { Link, useParams } from "react-router-dom";
import products from "../../products.json";

export default function DetailProduct() {
  const { id, name } = useParams();
  const [count, setCount] = useState(1);
  const [render, setRender] = useState("");
  // console.log("id param", id);
  // console.log(name);
  // console.log(render);
  useEffect(() => {
    (() => {
      const product = products.find(
        (p) => p.id === Number(id) && p.name === name,
      );
      setRender(product);
    })();
  }, [id, name]);

  if (!render) return <p>Loading...</p>;
  return (
    <>
    {console.log("render")}
      <section className="flex flex-col md:flex-row gap-5 w-full">
        <figure className="flex-1/2">
          <div className="w-full">
            <img src={render.image} alt={render.name} className="w-full mb-3" />
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
            <h1 className="text-5xl md:text-2xl lg:text-5xl">{render.name}</h1>
            <div className="flex gap-5 items-center">
              <p className="text-xl md:text-xs lg:text-xl text-red line-through text-red-500">
                IDR {render.price}
              </p>
              <p className="text-3xl md:text-xl text-primary">IDR 10.000</p>
            </div>
            <img src="/ratting.png" alt="" className="w-[30%]" />
            <div className="flex items-center text-xl md:text-xs lg:text-lg gap-3 text-gray-500">
              <p>200+ Review</p>
              <p>|</p>
              <p>Recommendation</p>
              <ThumbsUp color="#FF8906" size={18} />
            </div>
            <p className="text-gray-500 text-xl md:text-xs lg:text-lg">
              {render.description}
            </p>
            <div className="flex items-center">
              <Button
                onClick={() => {
                  if (count > 1) setCount(count - 1);
                }}
                size={"p-2 md:p-1 lg:p-2 border-2 border-primary"}
              >
                <Minus className="w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6 " />
              </Button>
              <p className="text-2xl px-3 ">{count}</p>
              <Button
                onClick={() => setCount(count + 1)}
                size={"p-2 md:p-1 lg:p-2 border-2 border-primary"}
                orange
              >
                <Plus className="w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6 " />
              </Button>
            </div>
            <label
              htmlFor="medium"
              className="text-2xl md:text-xl font-semibold"
            >
              Choose Size
            </label>
            <div className="flex gap-3 md:gap-1 text-md md:text-xs lg:text-xl">
              <Input
                type={"radio"}
                id={"regular"}
                name={"cup"}
                value={"regular"}
              >
                Regular
              </Input>
              <Input type={"radio"} id={"medium"} name={"cup"} value={"medium"}>
                Medium
              </Input>
              <Input type={"radio"} id={"large"} name={"cup"} value={"large"}>
                Large
              </Input>
            </div>
            <label htmlFor="hot" className="text-2xl md:text-xl font-semibold">
              Hot/ice
            </label>
            <div className="flex gap-3 md:gap-1 text-md md:text-xs lg:text-xl">
              <Input type={"radio"} id={"hot"} name={"hot/ice"} value={"hot"}>
                Hot
              </Input>
              <Input type={"radio"} id={"ice"} name={"hot/ice"} value={"ice"}>
                Ice
              </Input>
            </div>
          </section>
          <section className="flex gap-5 md:gap-3 text-md md:text-xs lg:text-xl mt-10 md:mt-5 lg:mt-10">
            <Link to="/payment" className="w-full">
              <Button orange border={"border-2 border-primary"}>
                Buy
              </Button>
            </Link>
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
      <section className="hidden md:grid grid-cols-3 gap-5">
        {products.slice(0, 3).map((item) => {
          return (
            <Card
              id={item.id}
              name={item.name}
              image={item.image}
              description={item.description}
              rating={item.rating}
              price={item.price}
              discount={"10.000"}
            />
          );
        })}
      </section>
      <section className="md:hidden grid grid-cols-2 gap-2">
        {products.slice(0, 2).map((item) => {
          return (
            <Card
              id={item.id}
              name={item.name}
              image={item.image}
              description={item.description}
              rating={item.rating}
              price={item.price}
              discount={"10.000"}
            />
          );
        })}
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
    </>
  );
}

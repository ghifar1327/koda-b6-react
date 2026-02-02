import { ArrowRight, Minus, Plus, ShoppingCart, ThumbsUp } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Button } from "../components/common/Button";
import Card from "../components/product/Card";
import Input from "../components/common/Input";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import  InvoiceContext  from "../context/InvoiceContext";

export default function DetailProduct() {
  const { id, name } = useParams();
  const [count, setCount] = useState(1);
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);
  const { addCart } = useContext(InvoiceContext);
  const [render, setRender] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/ghifar1327/koda-b6-react/refs/heads/main/products.json",
      );
      try {
        if (!res) throw new Error("faild to fetch");
        const data = await res.json();
        setProducts(data);
        const find = data.find(
          (item) => item.productId === Number(id) && item.productName === name,
        );
        setRender(find);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [id, name]);

  const { handleSubmit, register, reset } = useForm();
  function action(form) {
    const product = {
      id: Date.now(),
      image: render.images[0],
      productName: name,
      size: form.size,
      hotIce: form.hotIce,
      quantity: count,
      price: Number(render.price) * Number(count),
      total: Number(price) * Number(count),
    };
    // console.log(product)
    addCart(product);
    setCount(1);
    reset();
  }

  if (!render) return <p>Loading...</p>;
  const price = render.discountPercent
    ? render.price - (render.price * render.discountPercent) / 100
    : render.price;
  return (
    <>
      <section className="flex flex-col md:flex-row gap-5 w-full">
        <figure className="flex-1/2">
          <div className="w-full">
            <img
              src={render.images[0]}
              alt={render.productName}
              className="w-full mb-3"
            />
          </div>
          <div className="grid grid-cols-3 gap-3 w-full">
            <img
              src={render.images[1]}
              alt={render.productName}
              className="w-full"
            />
            <img
              src={render.images[2]}
              alt={render.productName}
              className="w-full"
            />
            <img
              src={render.images[3]}
              alt={render.productName}
              className="w-full"
            />
          </div>
        </figure>
        <form onSubmit={handleSubmit(action)} className=" w-full flex-1/2">
          <section className=" flex flex-col gap-3 md:gap-1 lg:gap-3 xl:gap-4 mb-5">
            <p className="p-1 px-2 bg-red-500 text-white md:text-xs w-fit rounded-full font-semibold">
              FLASH SALE!
            </p>
            <h1 className="text-5xl md:text-2xl lg:text-5xl">
              {render.productName}
            </h1>
            <div className="flex gap-5 items-center">
              {render.discountPercent ? (
                <>
                  <p className="text-xl md:text-xs lg:text-xl text-red line-through text-red-500">
                    IDR {render.price}
                  </p>
                  <p className="text-3xl md:text-xl text-primary">
                    IDR {price}{" "}
                    <span className="text-gray-300">
                      discout {render.discountPercent}%
                    </span>
                  </p>
                </>
              ) : (
                <p className="text-3xl md:text-xl text-primary">
                  IDR {render.price}
                </p>
              )}
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
                value={"Regular"}
                {...register("size", { required: true })}
              >
                Regular
              </Input>
              <Input
                type={"radio"}
                id={"medium"}
                name={"cup"}
                value={"Medium"}
                {...register("size", { required: true })}
              >
                Medium
              </Input>
              <Input
                type={"radio"}
                id={"large"}
                name={"cup"}
                value={"Large"}
                {...register("size", { required: true })}
              >
                Large
              </Input>
            </div>
            <label htmlFor="hot" className="text-2xl md:text-xl font-semibold">
              Hot/ice
            </label>
            <div className="flex gap-3 md:gap-1 text-md md:text-xs lg:text-xl">
              <Input
                type={"radio"}
                id={"hot"}
                name={"hot/ice"}
                value={"Hot"}
                {...register("hotIce", { required: true })}
              >
                Hot
              </Input>
              <Input
                type={"radio"}
                id={"ice"}
                name={"hot/ice"}
                value={"Ice"}
                {...register("hotIce", { required: true })}
              >
                Ice
              </Input>
            </div>
          </section>
          <section className="flex gap-5 md:gap-3 text-md md:text-xs lg:text-xl mt-10 md:mt-5 lg:mt-10">
            <Link to={user ? "/payment" : "/login"} className="w-full">
              <Button orange border={"border-2 border-primary"}>
                Buy
              </Button>
            </Link>
            <Button size={"border-2 p-2 md:p-1 lg:p-2 w-full border-primary"}>
              <ShoppingCart color={"#FF8906"} size={18} />
              <p className="text-primary px-3">add to chart</p>
            </Button>
          </section>
        </form>
      </section>
      <h1 className="text-4xl md:text-5xl text-semibold">
        Recomendation <span className="text-[#8E6447]">For You</span>
      </h1>
      <section className="hidden md:grid grid-cols-3 gap-5">
        {products.slice(0, 3).map((item) => {
          return (
            <Card
              id={item.productId}
              name={item.productName}
              image={item.images[0]}
              description={item.description}
              rating={item.rating}
              price={item.price}
              discount={item.discountPercent}
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
              discount={item.discount}
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

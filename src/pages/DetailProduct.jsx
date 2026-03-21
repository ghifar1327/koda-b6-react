import { ArrowRight, Minus, Plus, ShoppingCart, ThumbsUp } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Button } from "../components/common/Button";
import Card from "../components/product/Card";
import Input from "../components/common/Input";
import { Link, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useForm } from "react-hook-form";
import InvoiceContext from "../context/InvoiceContext";
// import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import http from "../lib/http";

export default function DetailProduct() {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const { user } = useContext(AuthContext);
  const { addCart } = useContext(InvoiceContext);
  const [products, setProducts ] = useState([])
  const [render, setRender] = useState({})
  const [sizes, setSizes] = useState([])
  const [variants, setVariants] = useState([])
  // console.log(products)

  useEffect(()=>{
    let isMounted = true
    const fetchdata = async ()=>{
      try{
        const [resProductByID, resAllProducts, resVariants, resSizes] = await Promise.all([
          http(`/products/${id}`),
          http("/products"),
          http(`/products/${id}/variants`),
          http(`/products/${id}/sizes`)
        ])
        if (!resProductByID.success || !resAllProducts.success || !resSizes.success || !resVariants.success) {
          throw new Error(resProductByID.message || resAllProducts.message || resSizes.message || resVariants.message)
        }
        // console.log(resAllProducts)
        console.log(resProductByID)
        if (isMounted){
          setRender(resProductByID.results)
          setProducts(resAllProducts.results)
          setSizes(resSizes.results)
          setVariants(resVariants.results)
        }
      }catch(err){
        return err
      }

    }
    if(id) fetchdata()
        return ()=>{
      isMounted = false
    }
  },[id])
  // const render = products.find((item) => Number(item.id) === Number(id));

  // paginationnnnnnnnnnnnn
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);
  const { handleSubmit, register, reset } = useForm();
  function action(form) {
    const product = {
      id: nanoid(10),
      image: render.images,
      name: name,
      size: form.size,
      temperature: form.hotIce,
      quantity: count,
      price: Number(render.price) * Number(count),
      total: Number(price) * Number(count),
    };
    addCart(product);
    setCount(1);
    reset();
  }

  if (!render) return <p>Loading...</p>;
  const price = render.discountPercent
    ? render.price - (render.price * render.discountPercent) / 100
    : render.price;
  return (
    <main className="p-[5%] md:px-[3%] lg:px-[10%] flex flex-col gap-10">
      <section className="flex flex-col md:flex-row gap-5 w-full">
        <figure className="flex-1/2">
          <div className="w-full">
            <img
              src={render.image}
              alt={render.name}
              className="w-full mb-3"
            />
          </div>
          <div className="grid grid-cols-3 gap-3 w-full">
            <img
              src={render.image}
              alt={render.name}
              className="w-full"
            />
            <img
              src={render.image}
              alt={render.name}
              className="w-full"
            />
            <img
              src={render.image}
              alt={render.name}
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
              {render.name}
            </h1>
            <div className="flex gap-5 items-center">
              <p className="text-3xl md:text-xl text-primary">
                IDR {render?.price?.toLocaleString("id-ID")}
              </p>
            </div>
            <p>{render.rating}</p>
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
              {/* SIZE */}
              {sizes.map((size)=>{
                return(
                <Input
                key={size.id}
                type="radio"
                id={`size-${size.id}`}
                value={size.id}
                {...register("size_id", {required:true})}>
                {size.name}
                </Input>
                )
               })}
            </div>
            <label htmlFor="hot" className="text-2xl md:text-xl font-semibold">
              Choose Variant
            </label>
            <div className="flex gap-3 md:gap-1 text-md md:text-xs lg:text-xl">
              {variants.map((variant) => {
                 return (
                   <Input
                     key={variant.id}
                     type="radio"
                     id={`variant-${variant.id}`}
                     value={variant.id}
                     {...register("variant_id", { required: true })}
                   >
                     {variant.name}
                   </Input>
                 )
               })}
            </div>
          </section>
          <section className="flex gap-5 md:gap-3 text-md md:text-xs lg:text-xl mt-10 md:mt-5 lg:mt-10">
            <Link to={user ? "/payment" : "/login"} className="w-full">
              <Button onClick={""} orange border={"border-2 border-primary"}>
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
        {currentProducts.map((item) => {
          return (
            <Card
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              description={item.description}
              
              rating={item.rating}
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
              
            />
          );
        })}
      </section>
      <section>
        <div className="flex justify-center mt-10 gap-3 pb-10 pl-30">
          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`p-2 w-10 rounded-full ${
                  currentPage === page ? "bg-primary text-white" : "bg-gray-200"
                }`}
              >
                {page}
              </button>
            );
          })}
          <Button orange size={"p-2 w-fit"} radius={"rounded-full"}>
            <ArrowRight color={"#FFFFFF"} />
          </Button>
        </div>
      </section>
    </main>
  );
}

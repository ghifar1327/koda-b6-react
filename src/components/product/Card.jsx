import { Button } from "../common/Button";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../feature/Modal";
import Input from "../common/Input";
import { useForm } from "react-hook-form";
import InvoiceContext from "../../context/InvoiceContext";
import { nanoid } from "nanoid";
import http from "../../lib/http";

export default function Card({
  id,
  image,
  name,
  description,
  price,
  rating,
}) {
  const navigate = useNavigate();

  const [sizes , setSizes] = useState([])
  const [variants, setVariants] = useState([])

  const [toggle, setToggle] = useState(false);
  const { handleSubmit, register, reset } = useForm();
  const {addCart} = useContext(InvoiceContext)
  function submit(form) {
    const product = {
      id: nanoid(10),
      image: image,
      name: name,
      size: form.modal_size,
      temperature: form.modal_temperature,
      quantity: form.modal_qty,
      price: Number(price) * Number(form.modal_qty),
      total: Number(price) * Number(form.modal_qty),
    };
    addCart(product);
    console.log(product);
    reset();
    setToggle(false)
  }
useEffect(() => {
  let isMounted = true

  const fetchData = async () => {
    try {
      const [resVariants, resSizes] = await Promise.all([
        http(`/products/${id}/variants`),
        http(`/products/${id}/sizes`)
      ])

      if (!resSizes.success || !resVariants.success) {
        throw new Error(resSizes.message || resVariants.message)
      }

      if (isMounted) {
        setSizes(resSizes.results)
        setVariants(resVariants.results)
      }

    } catch (err) {
      console.error(err)
    }
  }

  if (id) fetchData()

  return () => {
    isMounted = false
  }
}, [id])
  return (
    <>
      <figure key={id} className="col-span-1">
        <div className="relative group w-full:">
         <div className="relative w-full aspect-square overflow-hidden rounded">
           <img
             src={image}
             alt={name}
             className="w-full h-full object-cover"
           />
         </div>
          <div className="absolute inset-0 opacity-0 bg-black/60 group-hover:opacity-100 rounded  transition-all duration-500 ease-in-out">
            <Link
              to={`/detail/${id}/${name}`}
              className="w-full h-full flex justify-center items-center "
            >
              <p className="text-white border border-white p-2 px-5 hover:bg-white hover:text-black rounded-md  transition-all duration-300 ease-in-out">
                Detail
              </p>
            </Link>
          </div>
        </div>
        <section className="md:p-3">
          <div className=" md:relative p-3 md:-mt-[30%] bg-white shadow-2xl rounded-md py-4 h-75 md:h-65  flex justify-between gap-2 flex-col">
            <section className="flex flex-col gap-2">
              <p className=" md:text-sm lg:text-xl xl-2xl font-bold line-clamp-1">
                {name}
              </p>
              <p className="text-md md:text-md xl:text-md text-gray-500 line-clamp-2 md:line-clamp-3">
                {description}
              </p>
              <div>
                <p>{rating}</p>
              </div>
            </section>
            <section className="flex flex-col gap-2">
              <div>
                <p className="text-lg md:text-sm flex gap-2 lg:text-xl xl-2xl font-semibold text-primary">
                  IDR {price.toLocaleString("id-ID")}
                </p> 
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <Button
                  orange
                  onClick={() => navigate(`/detail/${id}/${name}`)}
                  size={
                    "p-1 text-xl md:p-0 xl:p-1 md:text-xs xl:text-xl flex-8/3"
                  }
                >
                  Buy
                </Button>
                <Button
                  onClick={() => setToggle(!toggle)}
                  border={"border border-primary"}
                  size={"p-2 md:p-1 w-full"}
                >
                  <ShoppingCart size={20} color={"#FF8906"} />
                </Button>
              </div>
            </section>
          </div>
        </section>
        {/* MODALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL */}
        
        <Modal toggle={toggle} onClick={() => setToggle(!toggle)}>
         <form
           className="w-[320px] md:w-105 flex flex-col gap-4"
           onSubmit={handleSubmit(submit)}
         >
           {/* HEADER */}
           <div className="flex flex-col items-center gap-2">
             <img
               src={image}
               alt={name}
               className="w-40 h-40 object-cover rounded-xl shadow"
             />
             <p className="text-2xl font-bold text-center">{name}</p>
             <p className="text-xl font-semibold text-primary">
               IDR {price ? price.toLocaleString("id-ID") : "0"}
             </p>
           </div>
                        
           {/* QUANTITY */}
           <div className="flex flex-col gap-1">
             <label className="font-semibold">Quantity</label>
             <Input
               type="number"
               min={1}
               defaultValue={1}
               {...register("modal_qty", { required: true })}
             />
           </div>
                        
           {/* SIZE */}
           <div className="flex flex-col gap-2">
             <label className="font-semibold">Choose Size</label>
             <div className="grid grid-cols-3 gap-2">
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
           </div>
              
           {/* VARIANT */}
           <div className="flex flex-col gap-2">
             <label className="font-semibold">Choose Variant</label>
             <div className="grid grid-cols-2 gap-2">
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
           </div>
              
           {/* BUTTON */}
           <Button
             orange
           >
             Add to Cart
           </Button>
         </form>
        </Modal>
        {/* <Modal toggle={toggle} onClick={() => setToggle(!toggle)}>
          <form className="flex w-80 md:w-100 flex-col gap-2" onSubmit={handleSubmit(submit)}>
            <p className="text-5xl mb- text-primary">{name}</p>
            <img src={image} alt={name} className="w-[80%]"/>
            <div className="flex gap-1 md-gap-2 lg:gap-5 items-center">
              <p className="font-bold text-5xl">
                IDR {price ? price.toLocaleString("id-ID") : "0"}
              </p>
            </div>
            <div>
              <label htmlFor="" className="text-xl font-semibold">
                Quantity
              </label>
              <Input type="number" name="qty" id="qty" {...register("modal_qty",{required: true})}></Input>
            </div>
            <label htmlFor="medium" className="text-xl font-semibold">
              Choose Size
            </label>
            <div className="flex flex-wrap gap-3 md:gap-1 ">
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
            <label htmlFor="hot" className="text-xl font-semibold">
              Hot/ice
            </label>
            <div className="flex flex-wrap gap-3 md:gap-1 ">
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
            <Button orange>Add Cart</Button>
          </form>
        </Modal> */}
      </figure>
    </>
  );
}

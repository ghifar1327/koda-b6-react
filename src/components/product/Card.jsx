import { Button } from "../common/Button";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../feature/Modal";
import Input from "../common/Input";
import { useForm } from "react-hook-form";
import InvoiceContext from "../../context/InvoiceContext";
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


function submit(form) {
  const quantity = form.quantity;
  const item = {
    product_id: id,
    size_id: Number(form.size),
    variant_id: Number(form.size),
    quantity,
  };
  addCart(item)
  reset();
  setToggle(false)
}
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
                <p>{rating.toFixed(2)}</p>
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
               {...register("quantity", { required : true , valueAsNumber : true })}
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
                {...register("size", { required : true , valueAsNumber : true })}>
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
                     {...register("variant", { required : true , valueAsNumber : true })}
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
      </figure>
    </>
  );
}

import { Button } from "../common/Button";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../feature/Modal";
import Input from "../common/Input";
import { useForm } from "react-hook-form";
import InvoiceContext from "../../context/InvoiceContext";

export default function Card({
  id,
  image,
  name,
  description,
  price,
  discount,
  rating,
}) {
  // const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const { handleSubmit, register, reset } = useForm();
  const {addCart} = useContext(InvoiceContext)
  function submit(form) {
    const product = {
      id: Date.now(),
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
  return (
    <>
      <figure key={id} className="col-span-1">
        <div className="relative group w-full:">
          <img src={image} alt={name} className="w-full rounded" />
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
          <div className=" md:relative p-3 md:-mt-[30%] bg-white shadow-2xl rounded-md py-4 h-75 md:h-60  flex justify-between gap-2 flex-col">
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
              {discount !== 0 && (
                <span className="text-xs text-red-600">
                  Discount {discount}%
                </span>
              )}
              <div className="flex gap-1 md-gap-2 lg:gap-5 items-center">
                <p
                  className={`${discount !== 0 ? "line-through text-red-500 text-sm md:text-xs lg:text-lg xl-xl" : "text-xl md:text-sm lg:text-xl xl-2xl font-semibold text-primary"}`}
                >
                  IDR {price.toLocaleString("id-ID")}
                </p>
                {discount !== 0 && (
                  <p className="text-lg md:text-sm flex gap-2 lg:text-xl xl-2xl font-semibold text-primary">
                    IDR {(price - price * (discount / 100)).toLocaleString("id-ID")}
                  </p>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <Button
                  orange
                  // onClick={() => navigate(`/detail/${id}/${name}`)}
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
        <Modal toggle={toggle} onClick={() => setToggle(!toggle)}>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit(submit)}>
            <p className="text-5xl mb-10 text-primary">{name}</p>
            <div className="flex gap-1 md-gap-2 lg:gap-5 items-center">
              <p
                className={`${discount !== 0 ? "line-through text-red-500 text-sm md:text-xs lg:text-lg xl-xl" : "text-xl md:text-sm lg:text-xl xl-2xl font-semibold text-primary"}`}
              >
                IDR {price.toLocaleString("id-ID")}
              </p>
              {discount !== 0 && (
                <p className="text-lg md:text-sm flex gap-2 lg:text-xl xl-2xl font-semibold text-primary">
                  IDR {(price - price * (discount / 100)).toLocaleString("id-ID")}
                </p>
              )}
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
            <div className="flex gap-3 md:gap-1 ">
              <Input
                type="radio"
                id="regularM"
                value="Regular"
                {...register("modal_size", { required: true })}
              >
                Regular
              </Input>

              <Input
                type="radio"
                id="mediumM"
                value="Medium"
                {...register("modal_size", { required: true })}
              >
                Medium
              </Input>

              <Input
                type="radio"
                id="largeM"
                value="Large"
                {...register("modal_size", { required: true })}
              >
                Large
              </Input>
            </div>
            <label htmlFor="hot" className="text-xl font-semibold">
              Hot/ice
            </label>
            <div className="flex gap-3 md:gap-1 ">
              <Input
                type="radio"
                id="hotM"
                value="Hot"
                {...register("modal_temperature", { required: true })}
              >
                Hot
              </Input>

              <Input
                type="radio"
                id="iceM"
                value="Ice"
                {...register("modal_temperature", { required: true })}
              >
                Ice
              </Input>
            </div>
            <Button orange>Add Cart</Button>
          </form>
        </Modal>
      </figure>
    </>
  );
}

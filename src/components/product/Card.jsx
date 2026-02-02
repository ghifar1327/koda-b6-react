import { Button } from "../common/Button";
import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Card({
  id,
  image,
  name,
  description,
  price,
  discount,
  rating,
}) {
  const navigate = useNavigate();

  return (
    <figure key={id} className="col-span-1">
      <div className="relative group w-full:">
        <img src={image} alt={name} className="w-full rounded" />
        <div className="absolute inset-0 opacity-0 bg-black/60 group-hover:opacity-100 rounded  transition-all duration-500 ease-in-out">
          <Link to={`/detail/${id}/${name}`} className="w-full h-full flex justify-center items-center "><p className="text-white border border-white p-2 px-5 hover:bg-white hover:text-black rounded-md  transition-all duration-300 ease-in-out">Detail</p></Link>
        </div>
      </div>
      <section className="md:p-3">
        <div className=" md:relative p-3 md:-mt-[30%] bg-white shadow-2xl rounded-md py-4 h-70 md:h-60  flex justify-between gap-2 flex-col">
          <section className="flex flex-col gap-2">
            <p className="text-2xl md:text-sm lg:text-xl xl-2xl font-bold line-clamp-1">
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
            <span className="text-xs text-red-600">Discount {discount}%</span>
            <div className="flex gap-1 md-gap-2 lg:gap-5 items-center">
              <p
                className={`${discount ? "line-through text-red-500 text-sm md:text-xs lg:text-lg xl-xl" : "text-xl md:text-sm lg:text-xl xl-2xl font-semibold text-primary"}`}
              >
                IDR {price}
              </p>
              {discount && (
                <p className="text-lg md:text-sm flex gap-2 lg:text-xl xl-2xl font-semibold text-primary">
                  IDR {price -(price *( discount / 100))}
                </p>
              )}
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
                onClick={() => navigate(`/detail/${id}/${name}`)}
                border={"border border-primary"}
                size={"p-2 md:p-1 w-full"}>
                <ShoppingCart size={20} color={"#FF8906"} />
              </Button>
            </div>
          </section>
        </div>
      </section>
    </figure>
  );
}

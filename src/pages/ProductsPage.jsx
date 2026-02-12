import Voucher from "../components/common/Voucher";
import { Button } from "../components/common/Button";
import { ArrowLeft, ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import Input from "../components/common/Input";
import Card from "../components/product/Card";
import Filter from "../components/feature/Filter";
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router";

export default function ProductsPage() {
  const [toggle, setToggle] = useState(false);
  const [searchParams] = useSearchParams();
  const products = useSelector((state) => state.products.products);
  // console.log(products)
// ========== filter =========

const filtered = useMemo(() => {
  let result = [...products];

  const name = searchParams.get("name");
  const categories = searchParams.getAll("category");
  const maxPrice = searchParams.get("maxPrice");

  if (name) {
    result = result.filter((item) =>
      item.productName.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (categories.length > 0) {
    result = result.filter((item) =>
      categories.includes(item.category)
    );
  }

  if (maxPrice) {
    result = result.filter((item) =>
      item.price <= Number(maxPrice)
    );
  }

  return result;
}, [products, searchParams]);

// ================================


  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filtered.slice(startIndex, endIndex);

  function toogleButton(e) {
    e.preventDefault();
    setToggle((prev) => !prev);
  }
  return (
    <main className="relative flex flex-col gap-10">
      <img src="/Rectangle4.png" alt="" className="w-full hidden md:block" />
      <div className="absolute px-[10%] inset-x-0 top-0 p-[5%] hidden md:block">
        <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-[80%]">
          We Provide Good Coffee and Healthy Meals
        </h1>
      </div>
      <section>
        <form className="flex items-center border-b border-gray-400 md:hidden gap-3 h-fit p-[5%]">
          <Input size={"p-2 gap-2 flex"} placeholder={"Find Product"}>
            <Search size={24} />
          </Input>
          <Button onClick={toogleButton} orange size={" h-fit p-2"}>
            <SlidersHorizontal className="h-full" />
          </Button>
        </form>
      </section>
      <section className="px-[5%] flex justify-between items-center md:px-[10%]">
        <h1 className="text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
          Today <span className="text-[#8E6447]">Promo</span>
        </h1>
        <div className="hidden md:flex h-fit gap-5">
          <Button
            size={"w-fit p-3 md:p-2 xl:p-3 bg-[#E8E8E8]"}
            radius={"rounded-full"}
          >
            <ArrowLeft size={22} />
          </Button>
          <Button
            orange
            size={"w-fit p-3 md:p-2 xl:p-3"}
            radius={"rounded-full"}
          >
            <ArrowRight size={22} />
          </Button>
        </div>
      </section>
      <section className="no-scrollbar w-full overflow-x-scroll">
        <div className="flex w-fit gap-5">
          <Voucher
            image={"/imgVoucher1.png"}
            alt={"Voucher"}
            imageSize={""}
            vStyle={"pt-[1%] bg-[#88B788] flex w-100 px-[1.5%] rounded-3xl"}
            title={"HAPPY MOTHER’S DAY!"}
            description={"Get one of our favorite menu for free!"}
          >
            <Button size={"text-white"}>Klaim Kupon</Button>
          </Voucher>
          <Voucher
            image={"/imgVoucher1.png"}
            alt={"Voucher"}
            imageSize={""}
            vStyle={"pt-[1%] bg-[#88B788] flex w-100 px-[1.5%] rounded-3xl"}
            title={"HAPPY MOTHER’S DAY!"}
            description={"Get one of our favorite menu for free!"}
          >
            <Button size={"text-white"}>Klaim Kupon</Button>
          </Voucher>
          <Voucher
            image={"/imgVoucher1.png"}
            alt={"Voucher"}
            imageSize={""}
            vStyle={"pt-[1%] bg-[#88B788] flex w-100 px-[1.5%] rounded-3xl"}
            title={"HAPPY MOTHER’S DAY!"}
            description={"Get one of our favorite menu for free!"}
          >
            <Button size={"text-white"}>Klaim Kupon</Button>
          </Voucher>
          <Voucher
            image={"/imgVoucher2.png"}
            alt={"Voucher"}
            imageSize={""}
            vStyle={"pt-[1%] bg-primary flex w-100 px-[1%] rounded-3xl"}
            title={"HAPPY MOTHER’S DAY!"}
            description={"Get one of our favorite menu for free!"}
          ></Voucher>
        </div>
      </section>
      <h1 className="text-5xl md:text-4xl lg:text-5xl xl:text-6xl px-[5%] md:px-[10%]">
        Our <span className="text-[#8E6447]">Product</span>
      </h1>
      <section className="flex w-full gap-5 px-[3%] md:px-[10%]">
        <div className="hidden md:block w-[50%]">
          <Filter />
        </div>
        <div className="grid grid-cols-2 gap-1 md:gap-3 lg:gap-5">
          {currentProducts.map((item) => {
            return (
              <Card
                id={item.productId}
                image={item.images[0]}
                name={item.productName}
                price={item.price}
                description={item.description}
                discount={item.discountPercent}
                rating={item.rating}
              />
            );
          })}
        </div>
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
      <div
        onClick={toogleButton}
        className={`${toggle ? "block" : "hidden"} md:hidden p-[5%] absolute w-full h-full`}
      >
        <Filter />
      </div>
    </main>
  );
}

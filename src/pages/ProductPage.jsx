import Voucher from "../components/common/Voucher";
import { Button } from "../components/common/Button";
import { ArrowLeft, ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import Input from "../components/common/Input";
import Card from "../components/product/Card";
import { useState } from "react";
import Filter from "../components/feature/Filter";
export default function ProductPage() {
    const [toggle, setToggle] = useState(false);
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
      <form className="flex items-center border-b-[1px] border-gray-400 md:hidden gap-3 h-fit p-[5%]">
        <Input size={"p-2 gap-2 flex"} placeholder={"Find Product"} ><Search size={24}/></Input>
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
          ><ArrowLeft size={22}/></Button>
          <Button
            orange
            size={"w-fit p-3 md:p-2 xl:p-3"}
            radius={"rounded-full"}
          ><ArrowRight size={22}/></Button>
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
      <section className="flex w-full gap-5 px-[5%]">
        <div className="hidden md:flex w-[50%]"><Filter/></div>
        <div className="grid grid-cols-2 gap-2 md:gap-3 lg-gap5">
          <Card image={"/hazelnut.png"} title={"Hazelnut Latte"} price={"20.000"} discon={"10.000"} description={"You can explore the menu that we provide with fun and have their own taste and make your day better."}rating={"/ratting.png"}/>
          <Card image={"/hazelnut.png"} title={"Hazelnut Latte"} price={"20.000"} discon={"10.000"} description={"You can explore the menu that we provide with fun and have their own taste and make your day better."}rating={"/ratting.png"}/>
          <Card image={"/hazelnut.png"} title={"Hazelnut Latte"} price={"20.000"} discon={"10.000"} description={"You can explore the menu that we provide with fun and have their own taste and make your day better."}rating={"/ratting.png"}/>
          <Card image={"/hazelnut.png"} title={"Hazelnut Latte"} price={"20.000"} discon={"10.000"} description={"You can explore the menu that we provide with fun and have their own taste and make your day better."}rating={"/ratting.png"}/>
          <Card image={"/hazelnut.png"} title={"Hazelnut Latte"} price={"20.000"} discon={"10.000"} description={"You can explore the menu that we provide with fun and have their own taste and make your day better."}rating={"/ratting.png"}/>
          <Card image={"/hazelnut.png"} title={"Hazelnut Latte"} price={"20.000"} discon={"10.000"} description={"You can explore the menu that we provide with fun and have their own taste and make your day better."}rating={"/ratting.png"}/>
          <Card image={"/hazelnut.png"} title={"Hazelnut Latte"} price={"20.000"} discon={"10.000"} description={"You can explore the menu that we provide with fun and have their own taste and make your day better."}rating={"/ratting.png"}/>
          <Card image={"/hazelnut.png"} title={"Hazelnut Latte"} price={"20.000"} discon={"10.000"} description={"You can explore the menu that we provide with fun and have their own taste and make your day better."}rating={"/ratting.png"}/>
        </div>
      </section>
      <div onClick={toogleButton} className={`${toggle ? "block" : "hidden"} md:hidden p-[5%] absolute w-full h-full`}>
        <Filter/>
      </div>
    </main>
  );
}

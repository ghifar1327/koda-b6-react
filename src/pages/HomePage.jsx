import React from "react";
import { Button } from "../components/common/Button";
import Message from "../components/feature/Message";

export default function HomePage() {
  return (
    <hero className={"bg-black flex flex-col-reverse md:flex-row md:h-auto h-screen"}>
      <section className="flex-1/2 h-full md:h-auto bg-linear-to-br from-[#777C82] to-[#0B0909] px-[5%] md:px-[10%] text-white flex flex-col justify-center gap-5 md:gap-5 lg:gap-7">
        <h1 className="text-3xl lg:text-5xl">Start Your Day with Coffee and Good Meals</h1>
        <p className="md:text-sm lg:text-lg xl:text-xl">
          We provide high quality beans, good taste, and healthy meals made by
          love just for you. Start your day with us for a bigger smile!
        </p>
        <div>
          <Button orange size={"px-5 p-2 text-black"}>
            Get Started
          </Button>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-primary text-3xl lg:text-5xl font-semibold">90+</p>
            <p className="md:text-sm lg:text-lg xl:text-xl">Staf</p>
          </div>
          <div className="w-0.5 h-full bg-white"></div>
          <div className="flex flex-col gap-2">
            <p className="text-primary text-3xl lg:text-5xl font-semibold">30+</p>
            <p className="md:text-sm lg:text-lg xl:text-xl">Store</p>
          </div>
          <div className="w-0.5 h-full bg-white"></div>
          <div className="flex flex-col gap-2">
            <p className="text-primary text-3xl lg:text-5xl font-semibold">800+</p>
            <p className="md:text-sm lg:text-lg xl:text-xl">Customer</p>
          </div>
        </div>
      </section>
      <section className="md:flex-1/2 h-[50%] md:h-auto">
        <img src="/retangle1.png" alt="coffie" className="w-full h-[100%] object-cover" />
      </section>
      <Message/>
    </hero>
  );
}

import React, { useEffect, useState } from "react";
import { Button } from "../components/common/Button";
import Message from "../components/feature/Message";
import Card from "../components/product/Card";
import { ArrowLeft, ArrowRight } from "lucide-react";


export default function HomePage() {
  const [products , setProducts] = useState([])
  useEffect(()=>{
    (async()=>{
        const res = await fetch("https://raw.githubusercontent.com/ghifar1327/koda-b6-react/refs/heads/main/products.json")
        try{
            if(!res) throw new Error("faild to fetch")
              const data = await res.json()
              setProducts(data)
        }catch(err){
          console.error(err)
        }
    })()
  })
  return (
    <>
      <hero className={"flex flex-col-reverse md:flex-row md:h-auto h-screen"}>
        <section className="flex-1/2 h-full w-full md:h-auto bg-linear-to-br from-[#777C82] to-[#0B0909] px-[5%] md:px-[10%] text-white flex flex-col justify-center gap-5 md:gap-5 lg:gap-7">
          <h1 className="text-3xl lg:text-5xl">
            Start Your Day with Coffee and Good Meals
          </h1>
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
              <p className="text-primary text-3xl lg:text-5xl font-semibold">
                90+
              </p>
              <p className="md:text-sm lg:text-lg xl:text-xl">Staf</p>
            </div>
            <div className="w-0.5 h-full bg-white"></div>
            <div className="flex flex-col gap-2">
              <p className="text-primary text-3xl lg:text-5xl font-semibold">
                30+
              </p>
              <p className="md:text-sm lg:text-lg xl:text-xl">Store</p>
            </div>
            <div className="w-0.5 h-full bg-white"></div>
            <div className="flex flex-col gap-2">
              <p className="text-primary text-3xl lg:text-5xl font-semibold">
                800+
              </p>
              <p className="md:text-sm lg:text-lg xl:text-xl">Customer</p>
            </div>
          </div>
        </section>
        <section className="md:flex-1/2 h-[50%] md:h-auto">
          <img
            src="/retangle1.png"
            alt="coffie"
            className="w-full h-[100%] object-cover"
          />
        </section>
        <Message />
      </hero>
      <main className="flex flex-col gap-10">
        <article className="flex flex-col-reverse md:flex-row text-gray-500">
          <section className="flex-1/2 lg:pl-[10%] p-[5%] md:p-[4%] flex flex-col justify-center gap-3 md:gap-1 lg:gap-3 xl:gap-6">
            <div className="flex items-center h-fit md:gap-5 lg:gap-8 ">
              <div className="w-1 lg:w-3 md:h-[50%] bg-primary"></div>
              <h1 className="text-4xl text-black md:text-xl lg:text-3xl xl:text-5xl font-semibold">
                We Provide <span className="text-[#8E6447]">Good Coffee</span>{" "}
                and <span className="text-[#8E6447]">Healthy Meals</span>
              </h1>
            </div>
            <div className=" md:text-sm text-xl xl:text-xl">
              <p>
                You can explore the menu that we provide with fun and have their
                own taste and make your day better.
              </p>
            </div>
            <div className="flex gap-3 items-center md:text-sm text-xl xl:text-xl">
              <img
                src="/icons/checkGreen.png"
                alt="check"
                className="w-6 md:w-4 lg:w-6"
              />
              <p>High quality beans</p>
            </div>
            <div className="flex gap-3 items-center md:text-sm text-xl xl:text-xl">
              <img
                src="/icons/checkGreen.png"
                alt="check"
                className="w-6 md:w-4 lg:w-6"
              />
              <p>Healthy meals, you can request the ingredients</p>
            </div>
            <div className="flex gap-3 items-center md:text-sm text-xl xl:text-xl">
              <img
                src="/icons/checkGreen.png"
                alt="check"
                className="w-6 md:w-4 lg:w-6"
              />
              <p>Chat with our staff to get better experience for ordering</p>
            </div>
            <div className="flex gap-3 items-center md:text-sm text-xl xl:text-xl">
              <img
                src="/icons/checkGreen.png"
                alt="check"
                className="w-6 md:w-4 lg:w-6"
              />
              <p>Free member card with a minimum purchase of IDR 200.000.</p>
            </div>
          </section>
          <section className="flex-1/2">
            <img src="/Rectangle2.png" alt="" className="w-full" />
          </section>
        </article>
        {/* PRUDUCTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT */}
        <article className="flex-col flex items-center text-center px-[5%] gap-5">
          <h1 className="text-4xl md:text-3xl lg:text-5xl ">
            Here is People’s <span className="text-[#8E6447]">Favorite</span>
          </h1>
          <div className="bg-primary h-1 lg:h-2 w-[20%]"></div>
          <p className="text-gray-500">
            Let’s choose and have a bit taste of poeple’s favorite. It might be
            yours too!
          </p>
        </article>
        <figure className="grid grid-cols-2 md:grid-cols-4 px-[5%] md:px-[10%] gap-5 md:gap-3">
          {products.slice(0,4).map((item)=>{
            return <Card id={item.productId} name={item.productName} image={item.images[0]} description={item.description} rating={item.rating} price={item.price} discount={item.discountPercent}/>
          })} 
        </figure>
        <article className="flex-col flex items-center text-center px-[5%] gap-5 lg:gap-8  bg-[#F8F8F8] py-10">
          <h1 className="text-4xl md:text-3xl lg:text-5xl ">
            <span className="text-[#8E6447]">Visit Our People</span> in The Spot
            on The Map Below
          </h1>
          <div className="bg-primary h-1 lg:h-2 w-[20%]"></div>
          <p className="text-gray-500 md:w-[50%]">
            You can explore the menu that we provide with fun and have their own
            taste and make your day better.
          </p>
          <img src="/map.png" alt="" className="w-full" />
        </article>

        {/* TEASTIMONIALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL */}
        <article className="flex flex-col md:flex-row bg-linear-to-br from-[#777C82] to-[#0B0909] p-[5%] md:px-[10%]">
          <section className="flex-1/2">
            <img src="/Rectangle3.png" alt="person" className="w-full" />
          </section>
          <section className="flex-1/2 flex flex-col py-[5%] md:py-0 md:pl-[5%] gap-5 md:gap-2 lg:gap-3 xl:gap-5">
            <p className="text-xl md:text-sm lg:text-xl">TESTIMONIAL</p>
            <div className="flex gap-3">
              <div className="h-full w-[1%] bg-primary "></div>
              <p className="text-5xl md:text-2xl lg:text-3xl xl:text-5xl text-white">Viezh Robert</p>
            </div>
            <p className="text-xl md:text-sm lg:text-xl xl:text-xl text-primary">Manager Coffe Shop</p>
            <p className="text-xl md:text-sm lg:text-xl xl:text-xl text-white">“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
            <img src="/rating2.png" alt="rating" className="w-[40%]"/>
            <div className="flex gap-5">
              <Button size={"w-fit bg-white p-3 md:p-2 xl:p-3"} radius={"rounded-full"}><ArrowLeft size={22} /></Button>
              <Button orange size={"w-fit p-3 md:p-2 xl:p-3"} radius={"rounded-full"}><ArrowRight size={22}/></Button>
            </div>
            <img src="/slider.png" alt="" className="w-[13%]"/>
          </section>
        </article>
      </main>
    </>
  );
}

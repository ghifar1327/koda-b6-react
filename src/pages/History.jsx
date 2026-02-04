import { useContext } from "react";
import Input from "../components/common/Input";
import {
  ArrowRight,
  CalendarDays,
  Coffee,
  MessageSquareText,
  RefreshCcw,
  Repeat,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/common/Button";
import  AuthContext  from "../context/AuthContext";

export default function History() {
  const { user } = useContext(AuthContext);
  console.log(user.history);
  return (
    <>
      <h1 className="text-5xl">History Order</h1>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5 w-full">
        <section className="h-fit md:col-span-4 flex flex-col gap-5 text-lg  md:text-[10px] lg:text-lg">
          <form className="flex flex-col-reverse md:flex-row gap-5 md:gap-10">
            <section className="flex flex-1/4 p-2 bg-[#E8E8E899] gap-3">
              <Input
                type="radio"
                name="filter"
                inputStyle="group-has-[input:checked]:bg-white"
              >
                On Progress
              </Input>
              <Input
                type="radio"
                name="filter"
                inputStyle="group-has-[input:checked]:bg-white"
              >
                Sending Good
              </Input>
              <Input
                type="radio"
                name="filter"
                inputStyle="group-has-[input:checked]:bg-white"
              >
                Finish Order
              </Input>
            </section>
            <section>
              <div className="bg-[#E8E8E899] md:h-full w-fit p-3 px-5 flex items-center gap-3 cursor-pointer ">
                <CalendarDays />
                <select name="date" id="date" className="outline-none">
                  <option value="januari-2025">January 2025</option>
                  <option value="januari-2025">February 2025</option>
                  <option value="januari-2025">Mart 2025</option>
                </select>
              </div>
            </section>
          </form>
          {user.history.slice(0, 4).reverse().map((item) => {
            const date = item.create_at ? new Date(item.create_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }) : "-";
             return (<section
              key={item.id}
              className="flex p-5 md:p-2 w-full gap-3 h-auto bg-[#E8E8E899]"
            >
              <img
                src={item.orders[0].image}
                alt={item.orders[0].productName}
                className="hidden md:block w-[12%]"
              />
              <div className="grid gap-4 md:grid-cols-2 w-full">
                <section className=" flex w-full">
                  <div className="flex-1/2 flex flex-col">
                    <div className="flex-1/2">
                      <p className=" flex items-center gap-2 text-[#4F5665]">
                        <Coffee size={18} />
                        No. Order
                      </p>
                    </div>
                    <p className="flex-1/2 flex items-center font-semibold">
                      #{item.id}
                    </p>
                  </div>
                  <div className="flex-1/2 flex flex-col">
                    <div className="flex-1/2">
                      <p className=" flex items-center gap-2 text-[#4F5665]">
                        <CalendarDays size={18} /> Date
                      </p>
                    </div>
                    <p className="flex-1/2 flex items-center font-semibold">
                      {date}
                    </p>
                  </div>  
                </section>
                <section className=" flex w-full xl:pl-[8%]">
                  <div className="flex-1/2 flex flex-col">
                    <div className="flex-1/2">
                      <p className=" flex items-center gap-2 text-[#4F5665]">
                        <Repeat size={18} /> Total
                      </p>
                    </div>
                    <p className="flex-1/2 flex items-center font-semibold">
                      Idr {item.total}
                    </p>
                  </div>
                  <div className="flex-1/2 flex flex-col">
                    <div className="flex-1/2">
                      <p className="flex items-center gap-2 text-[#4F5665]">
                        <RefreshCcw size={18} /> Status
                      </p>
                    </div>
                    <div className="flex-1/2 flex items-center">
                      <p className="text-primary bg-[#FF890633] w-fit px-4 p-1 md:p-0 md:px-2 rounded-full md:text-xs lg:text-sm text-sm  font-semibold">
                        On Progress
                      </p>
                    </div>
                  </div>
                </section>
                <div className="flex justify-end flex-col">
                  <Link
                    to={`/order/${item.id}`}
                    className="text-primary underline decoration-solid"
                  >
                    Views Order Detail
                  </Link>
                </div>
              </div>
            </section>
            )})}

          <section className="hidden md:flex justify-center">
            <div className="flex gap-5">
              <Button orange size={"p-2 w-10"} radius={"rounded-full"}>
                {" "}
                1{" "}
              </Button>{" "}
              <Button
                size={"p-2 w-10 bg-[#E8E8E8] text-[#A0A3BD]"}
                radius={"rounded-full"}
              >
                {" "}
                2{" "}
              </Button>
              <Button
                size={"p-2 w-10 bg-[#E8E8E8] text-[#A0A3BD]"}
                radius={"rounded-full"}
              >
                {" "}
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
          </section>
        </section>
        <section className="w-full h-fit md:col-span-2 p-5 border rounded-md flex flex-col gap-3 border-gray-400">
          <div className="p-1 px-2 rounded-4xl bg-black w-fit">
            <MessageSquareText color="#fff" />
          </div>
          <p className="font-bold text-[#4F5665]">Send Us Message</p>
          <p className="text-[#4F5665]">
            if your unable to find answer or find your product quickly, please
            describe your problem and tell us. we will give you solution.
          </p>
          <Button orange>Send Message</Button>
        </section>
      </div>
    </>
  );
}

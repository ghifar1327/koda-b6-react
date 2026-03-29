import {
  IdCard,
  MapPin,
  PhoneCall,
  RefreshCw,
  Truck,
  User,
} from "lucide-react";
import { useParams } from "react-router";
import AuthContext from "../context/AuthContext";
import InvoiceContext from "../context/InvoiceContext";
import useLocalStorage from "../hooks/useLocalStotage";

export default function Order() {
  const { id } = useParams();
  const [histories ]= useLocalStorage("histories")

  const render = histories.find(item => id === item.id) || {};
  console.log(render)
  // const date = render.create_at
  //   ? new Date(render.create_at).toLocaleDateString("en-ID", {
  //       day: "numeric",
  //       month: "long",
  //       year: "numeric",
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     })
  //   : "-";
  return (
    <>
      <h1 className="text-3xl">
        Order <span className="font-bold">#{id}</span>
      </h1>
      {/* <p className="text-[#4F5665] text-2xl">{date}</p> */}
      <div className="flex flex-col gap-10 md:gap-10 md:flex-row w-full">
        <section className="flex-1/2">
          <h2 className="text-xl font-bold mb-2">Order Information</h2>
          <article className="flex justify-between border-b border-gray-300 py-5">
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center">
                <User color={"#4F5665"} />
                <p>Full Name</p>
              </div>
              <p className="font-bold">{render?.full_name}</p>
            </div>
          </article>
          <article className="flex justify-between border-b border-gray-300 py-5">
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center">
                <MapPin color="#4F5665" />
                <p className="text-[#4F5665]">Address</p>
              </div>
              <p className="font-bold">{render?.address}</p>
            </div>
          </article>
          <article className="flex justify-between border-b border-gray-300 py-5">
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center">
                <PhoneCall color="#4F5665" />
                <p className="text-[#4F5665]">Phone</p>
              </div>
              <p className="font-bold">{render?.phone}</p>
            </div>
          </article>
          <article className="flex justify-between border-b border-gray-300 py-5">
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center">
                <IdCard color="#4F5665" />
                <p className="text-[#4F5665]">Payment Method</p>
              </div>
              <p className="font-bold">Cash</p>
            </div>
          </article>
          <article className="flex justify-between border-b border-gray-300 py-5">
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center">
                <Truck color="#4F5665" />
                <p className="text-[#4F5665]">Shipping</p>
              </div>
              <p className="font-bold">{render?.shipping}</p>
            </div>
          </article>
          <article className="flex justify-between border-b border-gray-300 py-5">
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center">
                <RefreshCw color="#4F5665" />
                <p className="text-[#4F5665]">Status</p>
              </div>
              <p className="font-bold p-0.5 px-3 rounded-full text-green-600 bg-green-200">
                {render?.status}
              </p>
            </div>
          </article>
          <article className="flex justify-between border-b border-gray-300 py-5">
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center">
                <p className="text-[#4f5665]">Total Transaction</p>
              </div>
              <p className="font-bold text-primary">Idr. {render?.total_transaction.toLocaleString("id-ID")}</p>
            </div>
          </article>
        </section>
        <section className="flex-1/2 flex flex-col gap-3">
          <h2 className="text-xl font-bold mb-2">Your Order</h2>
          {render?.items?.map((item) => (
            <div
              key={item.transaction_id}
              className="bg-[#E8E8E84D] w-full p-2 pr-5 rounded flex justify-between items-center gap-2"
            >
              <div className="flex gap-5 ">
                <div className="w-[20%] aspect-square overflow-hidden rounded">
                <img
                   src={item.product_image}
                   alt={item.product_name}
                   className="w-[full] h-auto object-center"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <p className="p-0.5 px-3 bg-red-600 rounded-full text-xs text-white w-fit">
                    FLASH SALE!
                  </p>
                  <p className="text-xl xl:text-xl font-semibold">
                    {item.product_name}
                  </p>
                  <p className="text-xl xl:text-xl text-gray-400">
                    {item.quantity}psc | {item.size} | {item.variant} |{" "}
                    {render.shipping}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-xl xl:text-xl text-primary">
                      IDR {item.subtotal}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

import { Beaker, CalendarDaysIcon, Truck, User, UserCheck } from "lucide-react";
import React from "react";

export default function Dashboard() {
  return (
    <section className="p-[5%]">
    <div className=" text-white flex-1 flex gap-5">
      <section className="flex-1 justify-between flex flex-col rounded-xl bg-[#6FC276] h-30 p-5">
        <div className="flex items-center gap-3">
          <p className="w-10 h-10 rounded-full flex justify-center items-center bg-white">
            <Beaker className="text-primary" />
          </p>
          <p>Order On Progress</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-2xl">200</p>
          <p>+11.01%</p>
        </div>
      </section>
      <section className="flex-1 justify-between flex flex-col rounded-xl bg-[#6C69D4] h-30 p-5">
        <div className="flex items-center gap-3">
          <p className="w-10 h-10 rounded-full flex justify-center items-center bg-white"><Truck className="text-primary"/></p>
          <p>Order Shipping</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-2xl">100</p>
          <p>+4.01%</p>
        </div>
      </section>
      <section className="flex-1 justify-between flex flex-col rounded-xl bg-[#C56FBC] h-30 p-5">
        <div className="flex items-center gap-3">
          <p className="w-10 h-10 rounded-full flex justify-center items-center bg-white"><UserCheck className="text-primary"/></p>
          <p>Order Done</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-2xl">50</p>
          <p>+2.01</p>
        </div>
      </section>
    </div>
    <section className="border mt-5 rounded-xl border-gray-500 w-full h-100 text-8xl flex justify-center items-center">
      <h1>Chart</h1>
    </section>
    <section className="w-full mt-5 border rounded-xl border-gray-500 p-5">
      <form action="" className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Product Terlaris</h1>
          <div className="flex items-center gap-1 p-2 px-3 rounded bg-gray-200 w-fit">
           <CalendarDaysIcon/>
           <select className="text-black">
          <option>16-23 january 2026</option>
          </select>
        </div>
      </form>
      <table className="w-full mt-5">
        <thead>
          <tr className="text-gray-500 font-normal">
            <th className="py-5">No</th>
            <th className="py-5">Nama Product</th>
            <th className="py-5">Terjual</th>
            <th className="py-5">Keuntungan</th>
          </tr>
        </thead>
        <tbody className="text-center bg-gray-200">
            <tr className="text-gray-500 font-normal">
              <td className="py-5">1</td>
              <td className="py-5">Hazelnut Latte</td>
              <td className="py-5">300 cup</td>
              <td className="py-5">IDR 9.000.000</td>
            </tr>
        </tbody>
      </table>
    </section>
  </section>
  );
}

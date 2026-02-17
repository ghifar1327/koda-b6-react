import { Mail, MapPin, User, XCircle } from "lucide-react";
import React, { useContext, useState } from "react";
import { Button } from "../components/common/Button";
import Input from "../components/common/Input";
import InvoiceContext from "../context/InvoiceContext";
import AuthContext from "../context/AuthContext";

export default function Payment() {
  const [delivery, setDelivery] = useState("");
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({
    email: user?.email || "",
    fullName: user?.fullName || "",
    address: user?.address || "",
    delivery: "",
  });
  const { cart, removeCart, setHistory } = useContext(InvoiceContext);
  const subtotal = cart.reduce((acc, item) => acc + Number(item.total), 0);
  const deliveryFee = delivery === "Door Delivery" ? 10000 : 0;

  const tax = (subtotal + deliveryFee) * 0.05;

  const grandTotal = subtotal + deliveryFee + tax;

  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit() {
    if (!form.email || !form.fullName || !delivery) return;

    const data = {
      id: Date.now(),
      fullName: form.fullName,
      email: form.email,
      address: form.address,
      delivery: delivery,
      total: subtotal,
      orders: cart,
      create_at: Date.now(),
    };
    setHistory(data);
  }
  return (
    <div className="grid md:grid-cols-5 gap-10">
      <section className="order-1 md:order-1 flex flex-col gap-5 md:col-span-3 w-full">
        {cart.slice(0, 4).map((item) => {
          return (
            <>
              <div
                key={item.id}
                className="bg-[#E8E8E84D] w-full p-2 pr-5 rounded flex justify-between items-center gap-2"
              >
                <div className="flex gap-2">
                  <div className="w-[20%]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-center"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="p-0.5 px-3 bg-red-600 rounded-full text-xs text-white w-fit">
                      FLASH SALE!
                    </p>
                    <p className="text-xl xl:text-xl font-semibold">
                      {item.name}
                    </p>
                    <p className="text-xl xl:text-xl text-gray-400">
                      {item.quantity}pcs | {item.size} | {item.temperature} |{" "}
                      {delivery}
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-red-600 line-through">
                        IDR {item.price}
                      </p>
                      <p className="text-xl xl:text-xl text-primary">
                        IDR {item.total}
                      </p>
                    </div>
                  </div>
                </div>
                <button onClick={() => removeCart(item.id)}>
                  <XCircle size={20} color="red" />
                </button>
              </div>
            </>
          );
        })}
      </section>
      <section className="flex flex-col font-semibold text-xl gap-5 order-3 md:order-2 md:col-span-2 h-fit rounded w-full bg-[#E8E8E84D] p-5">
        <div className=" flex justify-between items-center">
          <p>Order</p>
          <p>Idr. {subtotal}</p>
        </div>
        <div className=" flex justify-between items-center">
          <p>Delivery</p>
          <p>Idr. {deliveryFee}</p>
        </div>
        <div className=" flex justify-between items-center">
          <p>Tax</p>
          <p>Idr. {tax}</p>
        </div>
        <div className="w-full h-[1px] bg-gray-400"></div>
        <div className=" flex justify-between items-center">
          <p>Sub Total</p>
          <p>Idr. {grandTotal}</p>
        </div>
        <form onSubmit={handleSubmit} className="font-normal">
          <Button type="submit" orange>
            Checkout
          </Button>
        </form>
        <p className="text-gray-400 font-normal text-lg">We Accept</p>
        <div className="flex justify-between items-center">
          <img src="/eWallet/bri.svg" alt="BRI" className="w-[10%]" />
          <img src="/eWallet/dana.svg" alt="DANA" className="w-[15%]" />
          <img src="/eWallet/bca.svg" alt="BCA" className="w-[15%]" />
          <img src="/eWallet/gopay.svg" alt="GOPAY" className="w-[15%]" />
          <img src="/eWallet/ovo.svg" alt="OVO" className="w-[10%]" />
          <img src="/eWallet/paypal.svg" alt="PAYPAL" className="w-[7%]" />
        </div>
        <p className="text-gray-400 font-normal text-lg">
          *Get Discount if you pay with Bank Central Asia
        </p>
      </section>
      <section className="order-2 md:order-3 md:col-span-3 w-full flex flex-col gap-5">
        <h1 className="text-3xl font-semibold">Payment Info & Deliver</h1>
        <Input
          label="Email"
          type="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          defaultValue={user.email}
          placeholder="Enter Your Email"
        >
          <Mail size={18} />
        </Input>
        <Input
          label="Full Name"
          type="text"
          id="fullname"
          value={form.fullName}
          onChange={handleChange}
          defaultValue={user.fullName}
          placeholder="Enter Your Full Name"
        >
          <User size={18} />
        </Input>
        <Input
          label="Address"
          type="text"
          id="address"
          value={form.address}
          onChange={handleChange}
          defaultValue={"karawang"}
          placeholder="Enter Your Address"
        >
          <MapPin size={18} />
        </Input>
        <div className="flex flex-col gap-5">
          <label htmlFor="dine in" className="font-semibold">
            Delivery
          </label>
          <div className="flex gap-7">
            <Input
              type="radio"
              name="delivery"
              value="Dine In"
              id="dineIn"
              checked={delivery === "Dine In"}
              onChange={(e) => setDelivery(e.target.value)}
            >
              Dine In
            </Input>
            <Input
              type="radio"
              name="delivery"
              value="Door Delivery"
              id="doorDelivery"
              checked={delivery === "Door Delivery"}
              onChange={(e) => setDelivery(e.target.value)}
            >
              Door Delivery
            </Input>
            <Input
              type="radio"
              name="delivery"
              value="Pick Up"
              id="pickUp"
              checked={delivery === "Pick Up"}
              onChange={(e) => setDelivery(e.target.value)}
            >
              Pick Up
            </Input>
          </div>
        </div>
      </section>
    </div>
  );
}

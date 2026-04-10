import { TbPaperBagOff } from "react-icons/tb"; 
import { Mail, MapPin, User, XCircle } from "lucide-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Button } from "../components/common/Button";
import Input from "../components/common/Input";
import InvoiceContext from "../context/InvoiceContext";
import AuthContext from "../context/AuthContext";
// import { nanoid } from "nanoid";
import http from "../lib/http";
import { useNavigate } from "react-router";
import Modal from "../components/feature/Modal";
import { Link } from "react-router";

export default function Payment() {
const navigate = useNavigate()
const [methods, setMethods] = useState([]);
const [selectedDelivery, setSelectedDelivery] = useState(null);
const { user } = useContext(AuthContext);
const {cart, setCart} = useContext(InvoiceContext);

const [form, setForm] = useState({
  email: "",
  fullName: "",
  address: "",
});
  useEffect(() => {
    (()=>{
      if (user) {
      setForm({
        email: user.email || "",
        fullName: user.full_name || "",
        // address: user.address || "",
        // delivery: "",
      })
    }
    })();
    (async()=>{
      try{
        const res = await http(`/cart/${user.id}`)
        if(!res.success) throw new Error(res.message)
        // console.log(res)
        setCart(res.results)
      }catch(err){
        return err
      }
    })()
}, [user]);

useEffect(()=>{
  (async ()=>{
    try{
      const res = await http("/master/methods");
      setMethods(res.results);
      // console.log(res.results)
    }catch(err){
      return err
    }
  })()
},[])
  const submitRef = useRef(null)
  const { removeCart, checkout, isError, isSuccess ,setIsSuccess, setIsError ,message } = useContext(InvoiceContext);
  const subtotal = cart?.reduce((acc, item) => acc + Number(item.subtotal), 0) || 0;
  const selectedMethod = methods.find(item => item.id === Number(selectedDelivery));
  const deliveryFee = selectedMethod?.add_price || 0;
  const tax = (subtotal + deliveryFee) * 0.05 || 0;

  const grandTotal = subtotal + deliveryFee + tax || 0;

  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
    // console.log(cart)
  function handleSubmit(e) {
    e.preventDefault();
  
    if (!form.email || !form.fullName || !selectedDelivery) {
      // alert("Please complete all required fields");
      return;
    }
  
    const trx = {
      user_id: user.id,
      address: form.address,
      id_method: selectedDelivery,
    };
  
    // console.log(trx);
    checkout(trx)
  }
  
  // console.log(user)
  return (
    <>
    <div className="grid md:grid-cols-5 gap-10">
      <section className="order-1 md:order-1 flex flex-col gap-5 md:col-span-3 w-full">
        <div className="flex items-center justify-between">
          <p className="text-4xl">Your order</p>
          <Link to="/product" className="w-fitt p-2 px-5 bg-primary border border-primary rounded-md hover:bg-white">+ Add menu</Link>
        </div>
        {cart?.length === 0 ? 
            <div className="flex flex-col items-center justify-center gap-5 h-full   py-10 rounded">
              <TbPaperBagOff size={50} className="text-gray-400"/>
              <p className="text-xl font-semibold">Your cart is empty ☕</p>
              <p className="text-gray-400">Please add some products first</p>
          </div> :
        cart?.slice(0, 4).map((item) => {
          console.log("ITEM:", item);
          return (
            <>
              <div
                key={item.id}
                className="bg-[#E8E8E84D] w-full p-2 pr-5 rounded flex justify-between items-center gap-2"
              >
                <div className="flex gap-2">
                  <div className="w-[20%] h-[full] aspect-square overflow-hidden">
                    <img
                      src={item?.product_image}
                      alt={item?.product_name}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="p-0.5 px-3 bg-red-600 rounded-full text-xs text-white w-fit">
                      FLASH SALE!
                    </p>
                    <p className="text-xl xl:text-xl font-semibold">
                      {item?.product_name}
                    </p>
                    <p className="text-xl xl:text-xl text-gray-400">
                      {item?.quantity}pcs | {item?.size} | {item?.variant} |{""}
                      {selectedMethod?.name}
                    </p>
                    <div className="flex items-center gap-2">
                      {/* <p className="text-xs text-red-600 line-through">
                        IDR {""}
                      </p> */}
                      <p className="text-xl xl:text-xl text-primary">
                        IDR {item?.subtotal.toLocaleString("id-ID")}
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
        })
      }
      </section>
      <div className="flex flex-col gap-5 order-3 md:order-2 md:col-span-2 h-fit">
        <p className="text-3xl">Total</p>
      <section className="flex flex-col font-semibold text-xl gap-5 order-3 md:order-2 md:col-span-2 h-fit rounded w-full bg-[#E8E8E84D] p-5">
        <div className=" flex justify-between items-center">
          <p>Order</p>
          <p>Idr. {subtotal?.toLocaleString("id-ID")}</p>
        </div>
        <div className=" flex justify-between items-center">
          <p>Delivery</p>
          <p>Idr. {deliveryFee?.toLocaleString("id-ID")}</p>
        </div>
        <div className=" flex justify-between items-center">
          <p>Tax</p>
          <p>Idr. {tax?.toLocaleString("id-ID")}</p>
        </div>
        <div className="w-full bg-gray-400"></div>
        <div className=" flex justify-between items-center">
          <p>Sub Total</p>
          <p>Idr. {grandTotal?.toLocaleString("id-ID")}</p>
        </div>
          <Button onClick={()=> submitRef.current?.click()} type="button" orange>
            Checkout
          </Button>
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
      </div>
      <form  onSubmit={handleSubmit} className="order-2 md:order-3 md:col-span-3 w-full flex flex-col gap-5">
        <h1 className="text-3xl font-semibold">Payment Info & Deliver</h1>
        <Input
          name="email"
          label="Email"
          type="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter Your Email"
        >
          <Mail size={18} />
        </Input>
        <Input
        name="fullName"
          label="Full Name"
          type="text"
          id="fullname"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Enter Your Full Name"
        >
          <User size={18} />
        </Input>
        <Input
          label="Address"
          type="text"
          id="address"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Enter Your Address"
        >
          <MapPin size={18} />
        </Input>
        <div className="flex flex-col gap-5">
          <label htmlFor="dine in" className="font-semibold">
            Delivery
          </label>
          <div className="flex gap-7">
            {methods.map((item) => (
            <Input
              key={item.id}
              type="radio"
              name="delivery"
              value={item.id}
              onChange={(e) => setSelectedDelivery(Number(e.target.value))}
            >
              {item.name}
            </Input>
          ))}
          </div>
        </div>
        <button ref={submitRef} type="submit" className="hidden"></button>
      </form>
    </div>
    <Modal success={isSuccess} onClick={()=> setIsSuccess(!isSuccess)}>
      <p className="text-3xl text-gray-700">{message}</p>
      <Button
        onClick={()=> setIsSuccess(!isSuccess)}
          orange
      >
        OK
      </Button>
    </Modal>
    <Modal error={isError} onClick={() => setIsError(!isError)}>
      <p className="text-2xl text-gray-700">{message}</p>
      <Button orange onClick={() => {setIsError(!isError); navigate("/product");}}>
        Add Product
      </Button>
    </Modal>
    </>
  );
}

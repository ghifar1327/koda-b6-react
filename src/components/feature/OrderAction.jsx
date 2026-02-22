import { CircleX, IdCard, Image, MapPin, PhoneCall, RefreshCw, Truck, User } from 'lucide-react';
import { useForm } from 'react-hook-form'
import { Button } from '../common/Button';
import { useContext } from 'react';
import InvoiceContext from "../../context/InvoiceContext";

export default function OrderAction({show, setShow, edit, order}) {
  const {editHistory} = useContext(InvoiceContext)
  const {handleSubmit, register } = useForm()
  if (!show || !order) return null;
  // console.log(order)

function action(data){
    editHistory(order.id, data.status);
  setShow();
}
  
  return (
    <div className={` absolute flex justify-end w-full min-h-screen top-0 bg-black/30`}>
        <form onSubmit={handleSubmit(action)} className='relative flex  flex-col gap-1 bg-white w-[50%] h-auto pl-[3%] py-[3%]  -right-[5%]'>
          <section className='flex  justify-between mb-3'>
              <h1 className='text-4xl'>#{order?.id}</h1>
              <button  type="button" onClick={()=>setShow(false)}>
                <CircleX size={30} className='text-red-600'/>  
              </button>
            </section>
          <h2 className="text-xl font-bold mb-2">Order Information</h2>
          <article className="flex justify-between border-b border-gray-300 py-5">
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center">
                <User color={"#4F5665"} />
                <p>Full Name</p>
              </div>
              <p className="font-bold">{order?.fullName}</p>
            </div>
          </article>
          <article className="flex justify-between border-b border-gray-300 py-5">
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center">
                <MapPin color="#4F5665" />
                <p className="text-[#4F5665]">Address</p>
              </div>
              <p className="font-bold">{order?.address}</p>
            </div>
          </article>
          <article className="flex justify-between border-b border-gray-300 py-5">
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center">
                <PhoneCall color="#4F5665" />
                <p className="text-[#4F5665]">Phone</p>
              </div>
              <p className="font-bold">{order?.phone}</p>
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
              <p className="font-bold">{order?.delivery}</p>
            </div>
          </article>
          <article className="flex justify-between border-b border-gray-300 py-5">
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center">
                <RefreshCw color="#4F5665" />
                <p className="text-[#4F5665]">Status</p>
              </div>
              {edit ?
              <select {...register("status")} defaultValue={order?.status} className="border p-1 rounded">
                <option value="On Progress">On Progress</option>
                <option value="Pending">Pending</option>
                <option value="Done">Done</option>
                <option value="Waiting">Waiting</option>
              </select>
              :
              <p className={`${order?.status == "On Progress" ? "bg-orange-200 text-orange-600" : order?.status == "Pending"? "bg-red-200 text-red-600" : order?.status == "Done"? "bg-green-200 text-green-600": "bg-gray-200 text-gray-600"} w-fit px-3 p-0.5 rounded-full`}>{order?.status}</p>
              }
            </div>
          </article>
          <article className="flex justify-between border-b mb-3 border-gray-300 py-5">
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-3 items-center">
                <p className="text-[#4f5665]">Total Transaction</p>
              </div>
              <p className="font-bold text-primary">Idr. {order?.total}</p>
            </div>
          </article>
          <section className='flex flex-col gap-3'>
          <h2 className='text-2xl'>Your Orders</h2>
          {order?.orders.map((item) => (
            <div
              key={item.id}
              className="bg-[#E8E8E84D] w-full p-2 pr-5 rounded flex justify-between items-center gap-2"
            >
              <div className="flex gap-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[20%] "
                />
                <div className="flex flex-col justify-between">
                  
                  <p className="text-xl xl:text-xl font-semibold">
                    {item.name}
                  </p>
                  <p className="text-xl xl:text-xl text-gray-400">
                    {item.quantity}psc | {item.size} | {item.temperature} |{" "}
                    {order.delivery}
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
            </div>
          ))}
          {edit && <Button orange>Update</Button>}
          </section>
        </form>
    </div>
  )
}

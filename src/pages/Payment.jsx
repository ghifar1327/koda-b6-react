import { Mail, MapPin, User, XCircle } from 'lucide-react'
import React from 'react'
import { Button } from '../components/common/Button'
import Input from '../components/common/Input'
import { Link } from 'react-router'

export default function Payment() {
  return (
    <div className='grid md:grid-cols-5 gap-10'>
        <section className='order-1 md:order-1 md:col-span-3 w-full'>
            <div className='bg-[#E8E8E84D] w-full p-2 pr-5 rounded flex justify-between items-center gap-2'>
                <div className='flex gap-2'>

                <img src="/hazelnut.png" alt="" />
                <div className='flex flex-col justify-between'>
                    <p className='p-0.5 px-3 bg-red-600 rounded-full text-xs text-white w-fit'>FLASH SALE!</p>
                    <p className='text-xl xl:text-xl font-semibold'>Hazel Nut</p>
                    <p className='text-xl xl:text-xl text-gray-400'>2psc | Regular | Ice | Dine in</p>
                    <div className='flex items-center gap-2'>
                        <p className='text-xs text-red-600'>IDR 40.000</p>
                        <p className='text-xl xl:text-xl text-primary'>IDR 20.000</p>
                    </div>
                </div>
                </div>
                <button>
                    <XCircle size={20} color='red'/>
                </button>
            </div>
        </section>
        <section className='flex flex-col font-semibold text-xl gap-5 order-3 md:order-2 md:col-span-2 h-fit rounded w-full bg-[#E8E8E84D] p-5'>
            <div className=' flex justify-between items-center'>
                <p>Order</p>
                <p>Idr. 40.00</p>
            </div>
            <div className=' flex justify-between items-center'>
                <p>Delivery</p>
                <p>Idr. 0</p>
            </div>
            <div className=' flex justify-between items-center'>
                <p>Tax</p>
                <p>Idr. 4000</p>
            </div>
            <div className='w-full h-[1px] bg-gray-400'></div>
            <div className=' flex justify-between items-center'>
                <p>Sub Total</p>
                <p>Idr. 44.000</p>
            </div>
            <div className='font-normal'>
                <Link to="/history">
                    <Button orange>Checkout</Button>
                </Link>
            </div>
            <p className='text-gray-400 font-normal text-lg'>We Accept</p>
            <div className='flex justify-between items-center'>
                <img src="/eWallet/bri.svg" alt="BRI"  className='w-[10%]'/>
                <img src="/eWallet/dana.svg" alt="DANA"  className='w-[15%]'/>
                <img src="/eWallet/bca.svg" alt="BCA" className='w-[15%]' />
                <img src="/eWallet/gopay.svg" alt="GOPAY"  className='w-[15%]'/>
                <img src="/eWallet/ovo.svg" alt="OVO"  className='w-[10%]'/>
                <img src="/eWallet/paypal.svg" alt="PAYPAL" className='w-[7%]' />
            </div>
            <p className='text-gray-400 font-normal text-lg'>*Get Discount if you pay with Bank Central Asia</p>
        </section>
        <section className='order-2 md:order-3 md:col-span-3 w-full flex flex-col gap-5'>
            <h1 className='text-3xl font-semibold'>Payment Info & Deliver</h1>
            <Input label="Email" type="email" id="email" placeholder="Enter Your Email" ><Mail size={18}/></Input>
            <Input label="Full Name" type="text" id="fullname" placeholder="Enter Your Full Name" ><User size={18}/></Input>
            <Input label="Address" type="address" id="address" placeholder="Enter Your Address" ><MapPin size={18}/></Input>
            <div className='flex flex-col gap-5'>
                <label htmlFor='dine in' className='font-semibold'>Delivery</label>
                <div className='flex gap-7'>
                    <Input type="radio" name="delivery" value="dine in" id="dineIn">Dine In</Input>
                    <Input type="radio" name="delivery" value="door delivery" id="doorDelivery">Door Delivery</Input>
                    <Input type="radio" name="delivery" value="pick up" id="pickUp">Pick Up</Input>
                </div>
            </div>

        </section>
    </div>
  )
}

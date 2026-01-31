import { IdCard, MapPin, PhoneCall, RefreshCw, Truck, User } from 'lucide-react'
import React from 'react'

export default function Order() {
  return (
    <>
    <h1 className='text-3xl'>Order <span className='font-bold'>#12354-09893</span></h1>
    <p className='text-[#4F5665]'>21 March 2023 at 10:30 AM</p>
    <div className='flex flex-col gap-10 md:gap-10 md:flex-row w-full'>
        <section className='flex-1/2'>
            <h2 className='text-xl font-bold mb-2'>Order Information</h2>
            <article className='flex justify-between border-b border-gray-300 py-5'>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex gap-3 items-center'>
                        <User color={'#4F5665'}/>
                        <p>Full Name</p>
                    </div>
                    <p className='font-bold'>Ghaluh Wizard Anggoro</p>
                </div>
            </article>
            <article className='flex justify-between border-b border-gray-300 py-5'>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex gap-3 items-center'>
                        <MapPin color='#4F5665'/>
                        <p className='text-[#4F5665]'>Adress</p>
                    </div>
                    <p className='font-bold'>Griya bandung indah</p>
                </div>
            </article>
            <article className='flex justify-between border-b border-gray-300 py-5'>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex gap-3 items-center'>
                        <PhoneCall color='#4F5665'/>
                        <p className='text-[#4F5665]'>Phone</p>
                    </div>
                    <p className='font-bold'>082116304338</p>
                </div>
            </article>
            <article className='flex justify-between border-b border-gray-300 py-5'>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex gap-3 items-center'>
                        <IdCard color='#4F5665'/>
                        <p className='text-[#4F5665]'>Payment Method</p>
                    </div>
                    <p className='font-bold'>Cash</p>
                </div>
            </article>
            <article className='flex justify-between border-b border-gray-300 py-5'>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex gap-3 items-center'>
                        <Truck color='#4F5665'/>
                        <p className='text-[#4F5665]'>Shipping</p>
                    </div>
                    <p className='font-bold'>Dine In</p>
                </div>
            </article>
            <article className='flex justify-between border-b border-gray-300 py-5'>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex gap-3 items-center'>
                        <RefreshCw color='#4F5665'/>
                        <p className='text-[#4F5665]'>Status</p>
                    </div>
                    <p className='font-bold p-0.5 px-3 rounded-full text-green-600 bg-green-200'>Done</p>
                </div>
            </article>
            <article className='flex justify-between border-b border-gray-300 py-5'>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex gap-3 items-center'>
                        <p className='text-[#4f5665]'>Total Transaction</p>
                    </div>
                    <p className='font-bold text-primary'>Idr. 40.000</p>
                </div>
            </article>
        </section>
        <section className='flex-1/2'>
            <h2 className='text-xl font-bold mb-2'>Your Order</h2>
            <div className='bg-[#E8E8E84D] w-full p-2 pr-5 rounded flex justify-between items-center gap-2'>
                <div className='flex gap-5'>
                <img src="/hazelnut.png" alt="" />
                <div className='flex flex-col justify-between'>
                    <p className='p-0.5 px-3 bg-red-600 rounded-full text-xs text-white w-fit'>FLASH SALE!</p>
                    <p className='text-xl xl:text-xl font-semibold'>Hazel Nut</p>
                    <p className='text-xl xl:text-xl text-gray-400'>2psc | Regular | Ice | Dine in</p>
                    <div className='flex items-center gap-2'>
                        <p className='text-xs text-red-600 line-through'>IDR 40.000</p>
                        <p className='text-xl xl:text-xl text-primary'>IDR 20.000</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

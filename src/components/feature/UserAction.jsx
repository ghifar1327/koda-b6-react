import { CircleX, Image, KeyRound, Mail, MapPin, PhoneCall, User } from 'lucide-react'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../common/Button'
import Input from '../common/Input'

export default function UserAction({show, setShow, add, edit, user}) {
    const {handleSubmit, register, reset} = useForm()
    useEffect(() => {
        if (edit && user) {
            reset(user);
        }
    }, [user]);
    console.log(user)
    if (!show) return null;
    
    return (
      <div className={`absolute flex justify-end w-full  top-0 bg-black/30`}>
          <form onSubmit={handleSubmit("")} className='relative flex  flex-col gap-10 bg-white w-[50%] h-auto pl-[3%] py-[3%]  -right-[5%]'>
              <section className='flex  justify-between'>
                <h1 className='text-4xl'>{`${add ?  "Insert User" : edit && user?.fullName}`}</h1>
                <button type="button" onClick={setShow}>
                  <CircleX size={30} className='text-red-600'/>  
                </button>
              </section>
              <label htmlFor="uploadImg" className='flex flex-col gap-5 cursor-pointer'>
                  <p>User Image</p>
                  <input type="file" accept='img' id="uploadImg" className='hidden' {...register("images")}/>
                  <div className='p-5 rounded-xl bg-gray-200 w-fit' ><Image size={36}/></div>
                  <p className='p-1 bg-primary rounded-md px-4 w-fit' orange>Upload</p>
              </label>

            <Input label="Full Name" type="text" id="fullName" {...register("fullName", {require: true})}><User size={18}/></Input>
            <Input label="Email" type="email" id="email" {...register("email", {require: true})}><Mail size={18}/></Input>
            <Input label="Phone" type="number" id="phone" {...register("phone", {require: true})}><PhoneCall size={18}/></Input>
            <label htmlFor="password" className="font-semibold flex justify-between -mb-3">
                <p>Password</p>
                <p className="text-primary font-normal">Set New Password</p>
            </label>
            <Input label="" type="password" id="password" password  {...register("password", {require: true})}><KeyRound size={18}/></Input>
            <Input label="Adress" type="text" id="adress" {...register("address", {require: true})}><MapPin size={18}/></Input>

              <Button orange>{`${add ?  "Add Product" : edit && "Edit Product"}`}</Button>
          </form>
      </div>
    )
}

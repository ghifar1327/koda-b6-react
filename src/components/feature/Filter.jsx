import React from 'react'
import { Button } from '../common/Button'
import Input from '../common/Input'

export default function Filter() {
  return (
    <div onClick={(e)=> e.stopPropagation()}>
      <form action="" className='bg-black flex flex-col gap-5 w-full h-fit text-white p-5  accent-primary rounded-2xl'>
        <section className='flex justify-between font-bold'><p>Filter</p> <Button size={"w-fitt"}>Reset Filter</Button></section>
        <section className='flex flex-col gap-3'>
        <label htmlFor='search' className='font-bold'>Search</label>
        <Input type={"text"} id={"search"}  placeholder={"Search Your Product"} size={"bg-white text-black p-2"}></Input>
        </section>
        <section className='flex flex-col gap-3'>
          <label htmlFor="favorite-product" className='font-bold'>Catagory</label>
          <Input type={"checkbox"} id={"favarite-product"} size={"w-4 h-4 bg-black"}>Favorite Product</Input>
          <Input type={"checkbox"} id={"coffie"} size={"w-4 h-4 bg-black"}>Coffie</Input>
          <Input type={"checkbox"} id={"non-coffie"} size={"w-4 h-4 bg-black"}>Non Coffie</Input>
          <Input type={"checkbox"} id={"foods"} size={"w-4 h-4 bg-black"}>Foods</Input>
          <Input type={"checkbox"} id={"add-on"} size={"w-4 h-4 bg-black"}>Add-On</Input>
        </section>
        <section className='flex flex-col gap-3'>
          <label htmlFor="" className='font-bold'>Short By</label>
          <Input type={"checkbox"} id={"buy-1-get-1"} size={"w-4 h-4 bg-black"}>Buy 1 Get 1</Input>
          <Input type={"checkbox"} id={"flash-sale"} size={"w-4 h-4 bg-black"}>Flash Sale</Input>
          <Input type={"checkbox"} id={"birtday-package"} size={"w-4 h-4 bg-black"}>Birtday Package</Input>
          <Input type={"checkbox"} id={"cheap"} size={"w-4 h-4 bg-black"}>Cheap</Input>
          </section>
          <section>
            <label htmlFor="" className='font-bold'>Range Price</label>
          </section>
          <Button orange>Apply Filter</Button>
      </form>
    </div>
  )
}

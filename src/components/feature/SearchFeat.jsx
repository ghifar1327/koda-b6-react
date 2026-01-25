import React from 'react'
import { Button } from '../common/Button'
import Input from '../common/Input'

export default function SearchFeat() {
  return (
    <div onClick={(e)=> e.stopPropagation()}>
      <form action="" className='bg-black flex flex-col gap-5 w-full h-fit text-white p-5  accent-primary rounded-2xl'>
        <section className='flex justify-between font-bold'><p>Filter</p> <Button size={"w-fitt"}>Reset Filter</Button></section>
        <section className='flex flex-col gap-3'>
        <label htmlFor='search' className='font-bold'>Search</label>
        <Input type={"text"} id={"search"}  placeholder={"Search Your Product"} size={"bg-white text-black p-2"}/>
        </section>
        <section className='flex flex-col gap-3'>
          <label htmlFor="favorite-product" className='font-bold'>Catagory</label>
          <Input type={"checkbox"} id={"favarite-product"} label={"Favorite Product"} size={"w-4 h-4 bg-black"}/>
          <Input type={"checkbox"} id={"coffie"} label={"Coffie"} size={"w-4 h-4 bg-black"}/>
          <Input type={"checkbox"} id={"non-coffie"} label={"Non Coffie"} size={"w-4 h-4 bg-black"}/>
          <Input type={"checkbox"} id={"foods"} label={"Foods"} size={"w-4 h-4 bg-black"}/>
          <Input type={"checkbox"} id={"add-on"} label={"Add-On"} size={"w-4 h-4 bg-black"}/>
        </section>
        <section className='flex flex-col gap-3'>
          <label htmlFor="" className='font-bold'>Short By</label>
          <Input type={"checkbox"} id={"buy-1-get-1"} label={"Buy 1 Get 1"} size={"w-4 h-4 bg-black"}/>
          <Input type={"checkbox"} id={"flash-sale"} label={"Flash Sale"} size={"w-4 h-4 bg-black"}/>
          <Input type={"checkbox"} id={"birtday-package"} label={"Birtday Package"} size={"w-4 h-4 bg-black"}/>
          <Input type={"checkbox"} id={"cheap"} label={"Cheap"} size={"w-4 h-4 bg-black"}/>
          </section>
          <section>
            <label htmlFor="" className='font-bold'>Range Price</label>
          </section>
          <Button orange>Apply Filter</Button>
      </form>
    </div>
  )
}

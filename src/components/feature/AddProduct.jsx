import { CircleX, Image, PhoneIncoming } from 'lucide-react'
import { Button } from '../common/Button'
import Input from '../common/Input'

export default function AddProduct({show, setShow}) {
  return (
    <div className={`${show && "hidden"} absolute flex justify-end w-full  top-0 bg-black/30`}>
        <form className='relative flex  flex-col gap-10 bg-white w-[50%] h-auto pl-[3%] py-[3%]  -right-[5%]'>
            <section className='flex  justify-between'>
              <h1 className='text-4xl'>Add Product</h1>
              <button onClick={setShow}>
                <CircleX size={30} className='text-red-600'/>  
              </button>
            </section>
            <label htmlFor="uploadImg" className='flex flex-col gap-5'>
                <input type="file" accept='img' id="uploadImg" className='hidden'/>
                <div className='p-5 rounded-xl bg-gray-200 w-fit' ><Image size={36}/></div>
                <Button size='p-1 px-4 w-fit' orange>Upload</Button>
            </label>
            <Input type='text' id="ProductName" label="Product Name" placeholder="Enter Product Name"/>
            <Input type="number" id="ProductPrice" label="Product Price" placeholder="Enter Product Price"/>
            <section className='flex flex-col gap-3'>
              <label htmlFor="description" className='font-bold'>Description</label>
              <textarea className='outline-none p-5 border border-gray-200 rounded-xl h-50'></textarea>
            </section>
              
            <section className='flex flex-col gap-3'>
              <label htmlFor="description" className='font-bold'>Description</label>
              <div className='flex gap-5'>
                <Input type="radio" >M</Input>
                <Input type="radio" >L</Input>
                <Input type="radio" >XL</Input>
                <Input type="radio" >250 gr</Input>
                <Input type="radio" >50 gr</Input>
              </div>
            </section>
            <Input type="number" id="ProductStock" label="Product Stock" placeholder="Enter Product Stock"/>
            <Button orange>Save Product</Button>
        </form>
    </div>
  )
}

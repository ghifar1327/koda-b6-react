import { CircleX, Image, PhoneIncoming } from 'lucide-react'
import { Button } from '../common/Button'
import Input from '../common/Input'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/reduser/products.slice'

export default function ProductActions({show, setShow, add, edit}) {
  const {handleSubmit, register, reset} = useForm()
  const dispatch = useDispatch()

  function action(data){
    console.log(data)
    if(add){
      dispatch(addProduct(data))
    }
    // if(edit){
    reset()
    // }
  }

  return (
    <div className={`${show && "hidden"} absolute flex justify-end w-full  top-0 bg-black/30`}>
        <form onSubmit={handleSubmit(action)} className='relative flex  flex-col gap-10 bg-white w-[50%] h-auto pl-[3%] py-[3%]  -right-[5%]'>
            <section className='flex  justify-between'>
              <h1 className='text-4xl'>{`${add ?  "Add Product" : edit && "Edit Product"}`}</h1>
              <button onClick={setShow}>
                <CircleX size={30} className='text-red-600'/>  
              </button>
            </section>
            {add ?
            <label htmlFor="uploadImg" className='flex flex-col gap-5 cursor-pointer'>
                <input type="file" accept='img' id="uploadImg" className='hidden' {...register("images")}/>
                <div className='p-5 rounded-xl bg-gray-200 w-fit' ><Image size={36}/></div>
                <p className='p-1 bg-primary rounded-md px-4 w-fit' orange>Upload</p>
            </label> :
              <div>
                <p className='flex text-2xl'>Photo Product</p>
                <div flex>

                </div>
                <Button size='p-1 px-4 w-fit' orange>Upload</Button>
              </div>            
            }
            <Input type='text' id="name" label="Product Name" placeholder="Enter Product Name" {...register("name" , {required : true})}/>
            <Input type="number" id="ProductPrice" label="Product Price" placeholder="Enter Product Price"{...register("price", {required: true})}/>
            <section className='flex flex-col gap-3'>
              <label htmlFor="description" className='font-bold'>Description</label>
              <textarea className='outline-none p-5 border border-gray-200 rounded-xl h-50' {...register("description")}></textarea>
            </section>
              
            <section className='flex flex-col gap-3'>
              <label htmlFor="description" className='font-bold'>Product Size</label>
              <div className='flex gap-5'>
                <Input type="checkbox" name="size" value="M" {...register("size")}>M</Input>
                <Input type="checkbox" name="size" value="L" {...register("size")}>L</Input>
                <Input type="checkbox" name="size" value="XL" {...register("size")}>XL</Input>
                <Input type="checkbox" name="size" value="250 gr" {...register("size")}>250 gr</Input>
                <Input type="checkbox" name="size" value="50 gr" {...register("size")}>50 gr</Input>
              </div>
            </section>
            <Input type="number" id="ProductStock" label="Product Stock" placeholder="Enter Product Stock" {...register("stock")}/>
            <Button orange>{`${add ?  "Add Product" : edit && "Edit Product"}`}</Button>
        </form>
    </div>
  )
}

import { useState } from "react";
import { Button } from "./Button";

export default function Input({src, alt , imgSize,htmlFor, label, type, name, id,value, onChange,placeholder ,password}) {
      const [show, setShow ]= useState(false)
      function tooglePWD(e){
        e.preventDefault()
        setShow((prev) => !prev)
      }
    
  return (
    <div>
        <label htmlFor={htmlFor}>{label}</label>
        <div className='flex border border-[#DEDEDE] p-2 pr-0 items-center gap-3 mt-3 rounded-md'>
            <span>
                <img src={src} alt={alt} className={imgSize}/>
            </span>
            <span className='w-full'>
                <input type={password ? (show ? "text" : "password") : type}  name={name} id={id} value={value} onChange={onChange} placeholder={placeholder} className='outline-none w-full'/>
            </span>
            <span>{password && <Button onClick={tooglePWD} src={show ? "/icons/eye.png" : "/icons/eyeClose.png"} imgSize={"w-4 relative left-[40%]"}/>}</span>
        </div>
    </div>
  )
}

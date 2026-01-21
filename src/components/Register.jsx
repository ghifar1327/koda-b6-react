import Input from './Input'
import { ButtonOrange, SosmedAuth } from './Buttons'

export default function Register() {
  return (
    <>
       <div>
        <img src="/logos/coffiebrown.png" alt="coffie" />
      </div>
      <div className="font-semibold text-[#8E6447] text-[22px]"><p>Register</p></div>
      <div className="text-[#4F5665]"><p>Fill out the form correctly</p></div>
      <form action="" className='flex flex-col gap-5'>
        <Input src={"/icons/Profile.png"} alt={"person"} htmlFor={"name"} label={"Full Name"} type={"text"} name={"name"} id={"name"} placeholder={"Enter your Full Name"}/>
        <Input src={"/icons/mail.png"} alt={"mail"} htmlFor={"email"} label={"Email"} type={"email"} name={"email"} id={"email"} placeholder={"Enter your email"}/>
        <Input src={"/icons/key.png"} alt={"key"} htmlFor={"pwd"} label={"Password"} type={"password"} name={"pwd"} id={"pwd"} placeholder={"Enter your password"} eye={"/icons/EyeSlash.png"}/>
        <Input src={"/icons/key.png"} alt={"key"} htmlFor={"tryPwd"} label={"Confirm Password"} type={"password"} name={"tryPwd"} id={"tryPwd"} placeholder={"Enter your password Again"} eye={"/icons/EyeSlash.png"}/>
        <div className="text-[#FF8906] flex justify-end"><p>Forgot Password?</p></div>
        <ButtonOrange title={"Register"}/>
      </form>
      <div className="flex justify-center"><p>Have An Account? <span className="text-[#FF8906]">Login</span></p></div>
      <div className="flex justify-between gap-20 items-center text-[#AAAAAA]">
        <div className="h-[1px] w-full bg-[#DEDEDE]"></div>
        <p>Or</p>
        <div className="h-[1px] w-full bg-[#DEDEDE]"></div>
      </div>
      <SosmedAuth/>
    </>
  )
}

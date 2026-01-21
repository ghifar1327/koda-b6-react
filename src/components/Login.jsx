import React from "react";
import Input from "./Input";
import Button from "./button";

export default function Login() {
  return (
    <>
      <div>
        <img src="/logos/coffiebrown.png" alt="coffie" />
      </div>
      <div className="font-semibold text-[#8E6447] text-[22px]"><p>Login</p></div>
      <div className="text-[#4F5665]"><p>Fill out the form correctly</p></div>
      <Input src={"/icons/mail.png"} alt={"mail"} htmlFor={"email"} label={"Email"} type={"text"} name={"email"} id={"email"} placeholder={"Enter your email"}/>
      <Input src={"/icons/key.png"} alt={"key"} htmlFor={"password"} label={"Password"} type={"password"} name={"password"} id={"password"} placeholder={"Enter your password"} eye={"/icons/EyeSlash.png"}/>
      <div className="text-[#FF8906] flex justify-end"><p>Forgot Password?</p></div>
      <Button title={"Login"}/>
      <div className="flex justify-center"><p>Not Have An Account? <span className="text-[#FF8906]">Register</span></p></div>
      <div className="flex justify-between gap-20 items-center text-[#AAAAAA]">
        <div className="h-[1px] w-full bg-[#DEDEDE]"></div>
        <p>Or</p>
        <div className="h-[1px] w-full bg-[#DEDEDE]"></div>
      </div>
      <div className="flex justify-center gap-5">
        <button className="flex items-center gap-3 shadow-md border rounded-xl p-3 border-[#DEDEDE]/10 w-full justify-center "><img src="/logos/facebook.png" alt="facebook" /><p>Facebook</p></button>
        <button className="flex items-center gap-3 shadow-md border rounded-xl p-3 border-[#DEDEDE]/10 w-full justify-center "><img src="/logos/google.png" alt="google" className="flex items-center gap-"/><p>Google</p></button>
      </div>
    </>
  );
}

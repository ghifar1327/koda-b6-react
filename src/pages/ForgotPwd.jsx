import React, { useContext, useEffect, useState } from "react";
import Input from "../components/common/Input";
import { Button } from "../components/common/Button";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "../components/feature/Modal";
import { useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";

const scehema = yup.object({
  email : yup.string().email("Invalid Format Email").required("Email must be filled in")
})
export default function ForgotPwd() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const {handleSubmit, register, reset , formState : {errors}} = useForm({
    resolver : yupResolver(scehema)
  })
  const { forgotPassword, error, setError, isSuccess, setIsSuccess, message } = useContext(AuthContext);
 
 useEffect(() => {
    setIsSuccess(false);
 }, []);
 useEffect(() => {
     if (isSuccess) {
       setError(false);
       reset();
       const timer = setInterval(() => {
         setCount((prev) => {
           if (prev <= 1) {
             clearInterval(timer);
             navigate("/reset-password")
               return 0;
             }
           return prev - 1;
         });
       }, 1000);
     }
   }, [isSuccess]);
 
 
 
 
  function action(form){
  //  console.log(form)
  forgotPassword(form)
  reset()
 }
  return (
    // <AuthLayout src={"/auth3.png"} alt={"woman"}>
    <>
      <div>
        <img src="/logos/coffiebrown.png" alt="coffie" />
      </div>
      <div className="font-semibold text-[#8E6447] text-[22px]">
        <p>Fill out the form correctly</p>
      </div>
      <div className="text-[#4F5665]">
        <p>We will send new password to your email</p>
      </div>
      <form action="" className="flex flex-col gap-5" onSubmit={handleSubmit(action)}>
        <Input
          label={"Email"}
          type={"text"}
          id={"email"}
          placeholder={"Enter your email"}
          {...register("email")}
          ><Mail size={18}/></Input>
        <span className="text-red-500">{errors.email?.message}</span>
        <Button orange>Submit</Button>
      </form>


      
      {/* ================================== Modal ===================================*/}
      
      
      <Modal success={isSuccess}>
        <p className="text-3xl text-gray-700">{"OTP has been sent, please reset your password"}</p>
        <div className="flex flex-col w-full gap-2">
          <Button orange onClick={() => setCount(0)}>
            reset password
          </Button>
          <p className="text-gray-500 text-center">Redirect in {count}s</p>
        </div>
      </Modal>
      <Modal error={error} onClick={() => setError(!error)}>
        <p className="text-2xl text-gray-700 w-70 text-center">
          {message}
        </p>
        <div className="flex flex-col gap-3 w-full text-center">
          <Button orange onClick={() => setError(!error)}>
            Try Again
          </Button>
        </div>
      </Modal>
      </>
    // </AuthLayout>
  );
}

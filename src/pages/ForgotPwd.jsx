import React from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import Input from "../components/common/Input";
import { Button } from "../components/common/Button";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

const scehema = yup.object({
  email : yup.string().email("Invalid Format Email").required("Email must be filled in")
})
export default function ForgotPwd() {
  const {handleSubmit, register, reset , formState : {errors}} = useForm({
    resolver : yupResolver(scehema)
  })
 function action(form){
  console.log(form)
  reset()
 }
  return (
    <AuthLayout src={"/auth3.png"} alt={"woman"}>
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
    </AuthLayout>
  );
}

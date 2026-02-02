// import { useState } from "react";
import { KeyRound, Mail, MapPin, PhoneCall, User } from "lucide-react";
import { Button } from "../components/common/Button";
import Input from "../components/common/Input";
import AuthLayout from "../components/layouts/AuthLayout";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const schema = yup.object({
  fullName: yup.string().required("Name must be filled in"),
  email: yup
    .string()
    .email("invalid format format")
    .required("Email must be filled in"),
  address: yup.string().required("Address must be filled in"),
  phone: yup.number().integer("A phone number can't include a decimal point").positive("A phone number can't start with a minus").min(8).required('A phone number is required'),
  password: yup
    .string()
    .required("Password must be filled in")
    .min(4, "password minimum 4 characters")
    .matches(/[A-Z]/, "must contain capital letters"),
  confirmPassword: yup
    .string()
    .required("Confirm password must be filled in")
    .oneOf([yup.ref("password")], "Password does not match"),
});

export default function RegisterPage() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { registerUser } = useContext(AuthContext);
  function action(form) {
    const data = { ...form,id: Date.now(), role: "user" ,history : [], create_at: new Date(), update_at:""};
    // console.log(data);
    registerUser(data);
    reset();
  }
  return (
    <>
      <div>
        <img src="/logos/coffiebrown.png" alt="coffie" />
      </div>
      <div className="font-semibold text-[#8E6447] text-[22px]">
        <p>Register</p>
      </div>
      <div className="text-[#4F5665]">
        <p>Fill out the form correctly</p>
      </div>
      <form
        action=""
        className="flex flex-col gap-5 h-fit"
        onSubmit={handleSubmit(action)}
      >
        <Input
          label={"Full Name"}
          type={"text"}
          id={"name"}
          placeholder={"Enter your Full Name"}
          {...register("fullName")}
        >
          <User size={18} />
        </Input>
        <span className="text-red-500">{errors.fullName?.message}</span>
        <Input label="Phone" type="number" id="phone" placeholder="Enter Your Phone Number" {...register("phone")}><PhoneCall size={18}/></Input>
        <span className="text-red-500">{errors.phone?.message}</span>
        <Input label={"Address"} type={"text"} id={"address"} placeholder={"Enter your Address"} {...register("address")}><MapPin size={18} /></Input>
        <span className="text-red-500">{errors.address?.message}</span>
        <Input
          label={"Email"}
          type={"email"}
          id={"email"}
          placeholder={"Enter your email"}
          {...register("email")}
        >
          <Mail size={18} />
        </Input>
        <span className="text-red-500">{errors.email?.message}</span>
        <Input
          label={"Password"}
          type={"password"}
          id={"pwd"}
          placeholder={"Enter your password"}
          password
          {...register("password")}
        >
          <KeyRound size={18} />
        </Input>
        <span className="text-red-500">{errors.password?.message}</span>
        <Input
          label={"Confirm Password"}
          type={"password"}
          id={"tryPwd"}
          placeholder={"Enter your password Again"}
          password
          {...register("confirmPassword")}
        >
          <KeyRound size={18} />
        </Input>
        <span className="text-red-500">{errors.confirmPassword?.message}</span>
        <Button orange>Register</Button>
      </form>
      <div className="flex justify-center">
        <p>
          Have An Account?{" "}
          <span className="text-[#FF8906]">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
      <div className="flex justify-between gap-20 items-center text-[#AAAAAA]">
        <div className="h-[1px] w-full bg-[#DEDEDE]"></div>
        <p>Or</p>
        <div className="h-[1px] w-full bg-[#DEDEDE]"></div>
      </div>
      <div className="flex justify-center gap-5">
        <Button src={"/logos/facebook.png"} alt={"facebook"} shadow>
          Facebook
        </Button>
        <Button src={"/logos/google.png"} alt={"google"} shadow>
          Google
        </Button>
      </div>
    </>
  );
}

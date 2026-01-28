import { KeyRoundIcon, Mail } from "lucide-react";
import { Button } from "../components/common/Button";
import Input from "../components/common/Input";
import AuthLayout from "../components/layouts/AuthLayout";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const scehema = yup.object({
  email: yup.string()
    .email("invalid format email")
    .required("Email must be filled in"),
  password: yup.string().required("password must be filled in"),
});
export default function LoginPage() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  }
 = useForm({ resolver: yupResolver(scehema) });
function action(form) {
  console.log(form)
}
  return (
    <AuthLayout src={"/auth1.png"} alt={"login coffie"}>
      <div>
        <img src="/logos/coffiebrown.png" alt="coffie" />
      </div>
      <div className="font-semibold text-[#8E6447] text-[22px]">
        <p>Login</p>
      </div>
      <div className="text-[#4F5665]">
        <p>Fill out the form correctly</p>
      </div>
      <form action="" className="flex flex-col gap-5" onSubmit={handleSubmit(action)}>
        <Input
          label={"Email"}
          type={"text"}
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
          placeholder={"Enter your password"}
          password
          {...register("password")}
        >
          <KeyRoundIcon size={18} />
        </Input>
        <span className="text-red-500">{errors.password?.message}</span>
        <div className="text-[#FF8906] flex justify-end">
          <p>Forgot Password?</p>
        </div>
        <Button orange>Login</Button>
      </form>
      <div className="flex justify-center">
        <p>
          Not Have An Account? <span className="text-[#FF8906]">Register</span>
        </p>
      </div>
      <div className="flex justify-between gap-20 items-center text-[#AAAAAA]">
        <div className="h-[1px] w-full bg-[#DEDEDE]"></div>
        <p>Or</p>
        <div className="h-[1px] w-full bg-[#DEDEDE]"></div>
      </div>
      <div className="flex justify-center gap-5">
        <Button src={"/logos/facebook.png"} alt={"facebook"} shadow>
          facebook
        </Button>
        <Button
          title={"google"}
          src={"/logos/google.png"}
          alt={"google"}
          shadow
        >
          Google
        </Button>
      </div>
    </AuthLayout>
  );
}

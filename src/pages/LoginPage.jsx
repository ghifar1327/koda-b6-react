import { Button } from "../components/common/Button";
import Input from "../components/common/Input";
import AuthLayout from "../components/layouts/AuthLayout";

export default function LoginPage() {
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
      <form action="" className="flex flex-col gap-5">
        <Input
          src={"/icons/mail.png"}
          alt={"mail"}
          htmlFor={"email"}
          label={"Email"}
          type={"text"}
          name={"email"}
          id={"email"}
          placeholder={"Enter your email"}
        />
        <Input
          src={"/icons/key.png"}
          alt={"key"}
          htmlFor={"password"}
          label={"Password"}
          type={"password"}
          name={"password"}
          id={"password"}
          placeholder={"Enter your password"}
          eye={"/icons/EyeSlash.png"}
          password
          imgSize={"w-4"}
        />
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

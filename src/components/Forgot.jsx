import Input from "./Input";
import { Button } from "./Button";

export default function Forgot() {
  return (
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
        <Button title={"Submit"} orange />
      </form>
    </>
  );
}

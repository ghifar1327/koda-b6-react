import { KeyRoundIcon, Mail } from "lucide-react";
import { Button } from "../components/common/Button";
import Input from "../components/common/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import Modal from "../components/feature/Modal";

const scehema = yup.object({
  email: yup
    .string()
    .email("invalid format email")
    .required("Email must be filled in"),
  password: yup.string().required("password must be filled in"),
});
export default function LoginPage() {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);
  const { login, IsSuccess, setIsSuccess, error, setError } =
    useContext(AuthContext);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(scehema) });
  function action(form) {
    const result = login(form);
    if (!result.success) return;
    if (result.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  }
  useEffect(() => {
    setIsSuccess(false);
  }, []);
  useEffect(() => {
    if (IsSuccess) {
      setError(false);
      reset();
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            navigate("/");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  }, [IsSuccess]);
  return (
    <>
      <div>
        <img src="/logos/coffiebrown.png" alt="coffie" />
      </div>
      <div className="font-semibold text-[#8E6447] text-[22px]">
        <p>Login</p>
      </div>
      <div className="text-[#4F5665]">
        <p>Fill out the form correctly</p>
      </div>
      <form
        action=""
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(action)}
      >
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
        <div className="text-primary flex justify-end">
          <Link to="/forgotPassword">Forgot Password?</Link>
        </div>
        <Button orange>Login</Button>
      </form>
      <div className="flex justify-center">
        <p>
          Not Have An Account?{" "}
          <span className="text-primary">
            <Link to="/register">Register</Link>
          </span>
        </p>
      </div>
      <div className="flex justify-between gap-20 items-center text-[#AAAAAA]">
        <div className="h-px w-full bg-[#DEDEDE]"></div>
        <p>Or</p>
        <div className="h-px w-full bg-[#DEDEDE]"></div>
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
      <Modal onClick={() => navigate("/")} success={IsSuccess}>
        <p className="text-3xl text-gray-700">Login Successful</p>
        <div className="flex flex-col w-full gap-2">
          <Button orange onClick={()=> setCount(0)}>Enter</Button>
          <p className="text-gray-500 text-center">Redirect in {count}s</p>
        </div>
      </Modal>
      <Modal error={error} onClick={() => setError(!error)}>
        <p className="text-2xl text-gray-700 w-70 text-center">
          email not registered or password is wrong
        </p>
        <div className="flex flex-col gap-3 w-full text-center">
          <Link
            to="/register"
            className="border-2 rounded-md p-2 w-full hover:border-primary hover:text-primary"
          >
            Register
          </Link>
          <p className="text-gray-500">or</p>
          <Button orange onClick={() => setError(!error)}>
            Try Again
          </Button>
        </div>
      </Modal>
    </>
  );
}

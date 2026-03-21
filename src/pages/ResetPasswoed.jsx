import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import Input from '../components/common/Input'
import { KeyRound, Mail } from 'lucide-react'
import { Button } from '../components/common/Button'
import { VscGistSecret } from 'react-icons/vsc'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router'
import Modal from '../components/feature/Modal'

const scehema = yup.object({
  email : yup
        .string()
        .email("Invalid Format Email")
        .required("Email must be filled in"),
  password: yup
      .string()
      .required("Password must be filled in")
      .min(4, "password minimum 4 characters")
      .matches(/[A-Z]/, "must contain capital letters"),
  confirmPassword: yup
      .string()
      .required("Confirm password must be filled in")
      .oneOf([yup.ref("password")], "Password does not match"),
})
export default function ResetPasswoed() {
  const { resetPassword,error, setError, isSuccess, setIsSuccess, message } = useContext(AuthContext);
  const {handleSubmit, register, formState : {errors}} = useForm({
    resolver : yupResolver(scehema)
  })
 function action(form){
    resetPassword(form)
 }
  return (
    <>
      <div>
        <img src="/logos/coffiebrown.png" alt="coffie" />
      </div>
      <div className="font-semibold text-[#8E6447] text-[22px]">
        <p>Fill out the form correctly</p>
      </div>
      <div className="text-[#4F5665]">
        <p>Enter OTP code and create a new email</p>
      </div>
      <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit(action)}>
        <Input
          label={"Email"}
          type={"text"}
          id={"email"}
          placeholder={"Enter your email"}
          {...register("email")}
          ><Mail size={18}/></Input>
          <span className="text-red-500">{errors.email?.message}</span>
        <Input
          label={"OTP"}
          type={"text"}
          id={"otp"}
          maxLength={4}  
          inputMode="numeric"
          placeholder={"Enter your OTP code"}
          {...register("otp")}
          ><VscGistSecret size={18}/></Input>
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
        <Button orange>Submit</Button>
      </form>
{/* ========================================================================================= MODAL */}

      <Modal success={isSuccess} onClick={()=> setIsSuccess(!isSuccess)}>
        <p className="text-3xl text-gray-700">{message}</p>
        <Link
          to="/login"
          onClick={()=> setIsSuccess(!isSuccess)}
          className="bg-primary p-2 rounded-md w-full text-center"
        >
          Continue to Login
        </Link>
      </Modal>
      <Modal error={error} onClick={() => setError(!error)}>
        <p className="text-2xl text-gray-700">{message}</p>
        <Button orange onClick={() => setError(!error)}>
          Try Again
        </Button>
      </Modal>      
      </>
  )
}

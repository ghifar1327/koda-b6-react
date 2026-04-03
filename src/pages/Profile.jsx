import React, { useContext, useEffect, useState } from "react";
import { Button } from "../components/common/Button";
import Input from "../components/common/Input";
import { KeyRound, LogOut, Mail, MapPin, PhoneCall, User } from "lucide-react";
import Header from "../components/layouts/Header";
import AuthContext from "../context/AuthContext";
import { useForm } from "react-hook-form";
import Modal from "../components/feature/Modal";
import { Link, useNavigate } from "react-router";

export default function Profile() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate()
  const{user, updateProfile, isSuccess, setIsSuccess, error, setError, message, logout}= useContext(AuthContext)
  const{register, handleSubmit} = useForm()
  // console.log(isSuccess)

  useEffect(() => {
  setIsSuccess(false)
  setError(false)
  }, [])
function action(form){
  // console.log(form)
  updateProfile(form, user.user.id, file)
}
  return (
     <>
      <Header/>
      <main className="p-[5%]">
          <h1 className="text-5xl font-semibold mb-6">Profile</h1>
          <form className="flex flex-col md:flex-row md:gap-5 gap-10 lg:gap-10 w-full" onSubmit={handleSubmit(action)}>
            <section className="flex-1 border-2 rounded border-gray-300 p-3 w-full h-fit flex flex-col items-center gap-3">
                <h1 className="font-semibold text-2xl">{user.user.full_name}</h1>
                <p className="text-[#4F5665]">{user.user.email}</p>
                <div className="rounded-[100%] w-50 h-50 overflow-hidden">
                  <img
                    src={
                      file
                        ? URL.createObjectURL(file) // preview
                        : user?.user.picture || "/Rectangle3.png"
                    }
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                  
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {setFile(e.target.files[0]); console.log("TERPANGGIL");}}
                  className="hidden"
                  id="upload"
                />

                <label htmlFor="upload" className="p-2 px-3 bg-primary rounded-xl">
                    add new picture
                </label>
                <p className="font-semibold text-[#4F5665]"><span className="font-normal">Since</span> 20 January 2022</p>
            </section>
            <div className="border border-gray-300 flex-2/5 h-fit rounded p-3 flex flex-col gap-3" >
                <Input label="Full Name" type="text" id="fullName" defaultValue={user?.user.full_name} {...register("full_name")}><User size={18}/></Input>
                <Input label="Email" type="email" id="email"defaultValue={user?.user.email} {...register("email")}><Mail size={18}/></Input>
                <Input label="Phone" type="number" id="phone" defaultValue={user?.user.phone} {...register("phone")}><PhoneCall size={18}/></Input>
                {/* <label htmlFor="password" className="font-semibold flex justify-between -mb-3">
                    <p>Password</p>
                    <p className="text-primary font-normal">Set New Password</p>
                </label>
                <Input label="" type="password" id="password" password><KeyRound size={18}/></Input> */}
                <Input label="Address" type="text" id="address" defaultValue={user?.user.address} {...register("address")}><MapPin size={18}/></Input>
                <Button orange>Submit</Button>
            </div>
          </form>
      </main>
      <Modal success={isSuccess} onClick={()=> setIsSuccess(!isSuccess)}>
        <p className="text-3xl text-gray-700">{message}</p>
        <Button orange
          onClick={()=> {setIsSuccess(!isSuccess); logout(); navigate("/login")}}
          className="bg-primary p-2 rounded-md w-full text-center"
        >
          Please login again
        </Button>
      </Modal>
      <Modal error={error} onClick={() => setError(!error)}>
        <p className="text-2xl text-gray-700">{message}</p>
        <Button orange onClick={() => setError(!error)}>
          Try Again
        </Button>
      </Modal>
    </>
  );
}

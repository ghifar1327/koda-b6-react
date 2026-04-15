import React, { useContext, useEffect, useState } from "react";
import { Button } from "../components/common/Button";
import Input from "../components/common/Input";
import { KeyRound, LogOut, Mail, MapPin, PhoneCall, User } from "lucide-react";
import Header from "../components/layouts/Header";
import AuthContext from "../context/AuthContext";
import { useForm } from "react-hook-form";
import Modal from "../components/feature/Modal";

export default function Profile() {
  const [file, setFile] = useState(null);
  const{user, updateProfile, updatePicture, isSuccess, setIsSuccess, error, setError, message}= useContext(AuthContext)
  const{register, handleSubmit} = useForm()
  // console.log(isSuccess)

  useEffect(() => {
  setIsSuccess(false)
  setError(false)
  // console.log(import.meta.env.VITE_BASE_URL);
  // console.log(user.picture);
  }, [])
   function action(form){
     updateProfile(form, user.id)
   }
  return (
     <>
      <Header/>
      <main className="p-[5%]">
          <h1 className="text-5xl font-semibold mb-6">Profile</h1>
           <div className="flex flex-col md:flex-row md:gap-5 gap-10 lg:gap-10 w-full" >
            <form className="flex-1 border-2 rounded border-gray-300 p-3 w-full h-fit flex flex-col items-center gap-3">
                <h1 className="font-semibold text-2xl">{user?.full_name}</h1>
                <p className="text-[#4F5665]">{user?.email}</p>
                <div className="rounded-[100%] w-50 h-50 overflow-hidden">
                  <img
                    src={
                       file
                         ? URL.createObjectURL(file)
                         : `${user?.picture}`
                           ? `${user?.picture}`
                           : "/Rectangle3.png"
                     }
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                  
                <input
                  type="file"
                  accept="image/*"
                    onChange={(e) => {
                      const selected = e.target.files[0];
                      setFile(selected);
                      if (selected) {
                        updatePicture(selected, user.id);
                      }
                    }}
                  className="hidden"
                  id="upload"
                />

                <label htmlFor="upload" className="p-2 px-3 bg-primary rounded-xl">
                    add new picture
                </label>
                <p className="font-semibold text-[#4F5665]"><span className="font-normal">Since</span> 20 January 2022</p>
            </form>
            <form className="border border-gray-300 flex-2/5 h-fit rounded p-3 flex flex-col gap-3" onSubmit={handleSubmit(action)}>
                <Input label="Full Name" type="text" id="fullName" defaultValue={user?.full_name} {...register("full_name")}><User size={18}/></Input>
                <Input label="Email" type="email" id="email"defaultValue={user?.email} {...register("email")}><Mail size={18}/></Input>
                <Input label="Phone" type="number" id="phone" defaultValue={user?.phone} {...register("phone")}><PhoneCall size={18}/></Input>
                <Input label="Address" type="text" id="address" defaultValue={user?.address} {...register("address")}><MapPin size={18}/></Input>
                <Button orange>Submit</Button>
            </form>
          </div>
      </main>
      <Modal success={isSuccess} onClick={()=> setIsSuccess(!isSuccess)}>
        <p className="text-3xl text-gray-700">{message}</p>
        <Button orange
          onClick={()=> {setIsSuccess(!isSuccess)}}
          className="bg-primary p-2 rounded-md w-full text-center"
        >
          OK
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

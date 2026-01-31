import React from "react";
import { Button } from "../components/common/Button";
import Input from "../components/common/Input";
import { KeyRound, Mail, MapPin, PhoneCall, User } from "lucide-react";

export default function Profile() {
  return (
    <>
      <h1 className="text-5xl font-semibold">Profile</h1>
      <div className="flex flex-col md:flex-row md:gap-5 gap-10 lg:gap-10 w-full">
        <section className="flex-1 border-2 rounded border-gray-300 p-3 w-full h-fit flex flex-col items-center gap-3">
            <h1 className="font-semibold text-2xl">Ghaluh Wizard</h1>
            <p className="text-[#4F5665]">ghaluhwizz@gmail.com</p>
            <div className="rounded-[100%] w-50 h-50 overflow-hidden">
                <img src="/Rectangle3.png" alt="" className="w-full h-full object-cover"/>
            </div>
            <Button orange>Upload New Photo</Button>
            <p className="font-semibold text-[#4F5665]"><span className="font-normal">Since</span> 20 January 2022</p>
        </section>
        <form className="border border-gray-300 flex-2/5 h-fit rounded p-3 flex flex-col gap-3">
            <Input label="Full Name" type="text" id="fullName"><User size={18}/></Input>
            <Input label="Email" type="email" id="email"><Mail size={18}/></Input>
            <Input label="Phone" type="number" id="phone"><PhoneCall size={18}/></Input>
            <label htmlFor="password" className="font-semibold flex justify-between -mb-3">
                <p>Password</p>
                <p className="text-primary font-normal">Set New Password</p>
            </label>
            <Input label="" type="password" id="password" password><KeyRound size={18}/></Input>
            <Input label="Adress" type="text" id="adress"><MapPin size={18}/></Input>
            <Button orange>Submit</Button>
        </form>
      </div>
    </>
  );
}

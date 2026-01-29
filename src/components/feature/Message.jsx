import { Button } from "../common/Button";
import { MessageCircleMore, Send } from "lucide-react";
import Input from "../common/Input";
import { useState } from "react";

export default function Message() {
  const [toggle, setToggle] = useState(false);
  function toogleButton(e) {
    e.preventDefault();  
    setToggle((prev) => !prev);
  }
  // console.log(toggle)
  return (
    <>
      <Button
        size={"fixed z-100 bottom-[10%] right-[10%] p-5"}
        radius={"rounded-full"}
        orange
        onClick={toogleButton}
      ><MessageCircleMore size={26}/> </Button>
      <div
        onClick={toogleButton}
        className={`${toggle ? "block fixed inset-0 z-100" : "hidden"}`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed right-[10%] bottom-[22%] bg-white border-t-20 border-primary h-[70%] w-[80%] md:h-[60%] md:w-[45%] lg:w-[35%] xl:w-[25%] rounded-xl`}
        >
          <div className="flex h-full w-full flex-col justify-between">
            <section className="flex justify-start gap-3 p-3 border-b border-gray-400">
              <img src="/Maria.png" alt="" className="h-12" />
              <div className="z-10 flex flex-col items-start">
                <p className="font-bold">Maria Angel</p>
                <p className="text-primary">Admin Support</p>
              </div>
            </section>
            <section className="flex-1"></section>
            <section className="h-fit">
              <div className="flex w-full justify-between gap-2 p-3">
                <Input size={"px-2 p-1 h-15 md:h-auto "} text={"text-3xl md:text-xl"} />
                <Button
                  size={"p-1 px-4 md:px-2 lg:px-2  w-fit z-50"}
                  orange
                ><Send size={18} className={"w-8 h-auto md:w-5 "}/></Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

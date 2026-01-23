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
        icon={MessageCircleMore}
        iconSize={26}
        size={"fixed z-10 bottom-[10%] right-[10%] p-5"}
        radius={"rounded-full"}
        orange
        onClick={toogleButton}
      ></Button>
      <div
        onClick={toogleButton}
        className={`${toggle ? "block fixed inset-0" : "hidden"}`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`z-10 fixed right-[10%] bottom-[22%] bg-white border-t-20 border-primary h-[70%] w-[80%] md:h-[60%] md:w-[45%] lg:w-[35%] xl:w-[25%] rounded-xl`}
        >
          <div className="relative flex h-full w-full flex-col justify-between">
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
                <Input size={"px-2 p-1"} />
                <Button
                  icon={Send}
                  size={"p-1 px-2 w-fit z-50"}
                  iconSize={18}
                  orange
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

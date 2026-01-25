import { useState } from "react";
import { Button } from "./Button";
import { Eye, EyeClosed } from "lucide-react";

export default function Input({
  size,
  label,
  type,
  id,
  value,
  onChange,
  placeholder,
  password,
  children
}) {
  const [show, setShow] = useState(false);
  function tooglePWD(e) {
    e.preventDefault();
    setShow((prev) => !prev);
  }

  return (
    <div className={`${type==="checkbox"? "flex items-center justify-end gap-[3%] flex-row-reverse" : "w-full"}`}>
      <label htmlFor={id} className="font-semibold">{label}</label>
      <div className={`${size ? size :"flex items-center gap-3 mt-3 p-2 px-3" } ${type !== "checkbox" && "border border-[#DEDEDE] rounded-md w-full"} `}>
        <span>
          {children}
        </span>
        <span className="w-full">
          <input
            type={password ? (show ? "text" : "password") : type}
            name={id}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`outline-none w-full h-full ${type === "checkbox" && "cursor-pointer"}`}
          />
        </span>
        <span>
          {password && (
            <Button
              onClick={tooglePWD}
              size
            >
              {show ? <Eye size={18}/> : <EyeClosed size={18}/>}
            </Button>
          )}
        </span>
      </div>
    </div>
  );
}

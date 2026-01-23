import { useState } from "react";
import { Button } from "./Button";
import { Eye, EyeClosed } from "lucide-react";

export default function Input({
  iconSize,
  htmlFor,
  label,
  type,
  name,
  id,
  value,
  onChange,
  placeholder,
  password,
  icon: Icon,
}) {
  const [show, setShow] = useState(false);
  function tooglePWD(e) {
    e.preventDefault();
    setShow((prev) => !prev);
  }

  return (
    <div>
      <label htmlFor={htmlFor} className="font-semibold">{label}</label>
      <div className="flex border border-[#DEDEDE] p-2 px-3 items-center gap-3 mt-3 rounded-md">
        <span>
          {Icon && <Icon size={iconSize} />}
        </span>
        <span className="w-full">
          <input
            type={password ? (show ? "text" : "password") : type}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="outline-none w-full"
          />
        </span>
        <span>
          {password && (
            <Button
              onClick={tooglePWD}
              // src={show ? "/icons/eye.png" : "/icons/eyeClose.png"}
              iconSize={iconSize}
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

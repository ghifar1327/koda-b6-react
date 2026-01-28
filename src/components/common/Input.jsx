import { forwardRef, useState } from "react";
import { Button } from "./Button";
import { Check, Eye, EyeClosed } from "lucide-react";

const Input = forwardRef(
  ({ size, label, type, id, password, children, ...rest }, ref) => {
    const [show, setShow] = useState(false);
    function tooglePWD(e) {
      e.preventDefault();
      setShow((prev) => !prev);
    }

    return (
      <>
        {type === "checkbox" || type === "radio" ? (
          <label
            htmlFor={id}
            className={`${type === "radio" && "w-full flex-1"} group flex items-center gap-3 cursor-pointer`}
          >
            <input
              ref={ref}
              type={type}
              name={id}
              id={id}
              {...rest}
              className="hidden"
            />
            {type === "checkbox" ? (
              <>
                <div className="w-5 h-5 border-2 rounded-full flex items-center justify-center group-has-[input:checked]:bg-primary group-has-[input:checked]:border-primary">
                  <Check
                    size={14}
                    className="hidden group-has-[input:checked]:block text-white"
                  />
                </div>
                {children}
              </>
            ) : (
              <>
                <div className="w-full flex justify-center border-2 rounded-sm  border-[#E8E8E8] p-1 group-has-[input:checked]:border-primary">
                  <p className="">{children}</p>
                </div>
              </>
            )}
          </label>
        ) : (
          <div className="w-full">
            <label htmlFor={id} className="font-semibold">
              {label}
            </label>
            <div
              className={`${size ? size : "flex items-center gap-3 mt-3 p-2 px-3"} ${type !== "checkbox" && "border border-[#DEDEDE] rounded-md w-full"} `}
            >
              <span>{children}</span>
              <span className="w-full">
                <input
                  ref={ref}
                  type={password ? (show ? "text" : "password") : type}
                  name={id}
                  id={id}
                  {...rest}
                  className={`outline-none w-full h-full ${type === "checkbox" && "cursor-pointer"}`}
                />
              </span>
              <span>
                {password && (
                  <Button onClick={tooglePWD} size>
                    {show ? <Eye size={18} /> : <EyeClosed size={18} />}
                  </Button>
                )}
              </span>
            </div>
          </div>
        )}
      </>
    );
  },
);

export default Input;


import { forwardRef, useState } from "react";
import { Button } from "./Button";
import { Check, Eye, EyeClosed } from "lucide-react";
/**
 * @component
 * @param {Object} props - Input props
 * @param {string} [props.label] - Label text for input (non-checkbox & non-radio)
 * @param {string} [props.type="text"] - Input type (text, email, password, checkbox, radio)
 * @param {string} props.id - Input id (also used as name attribute)
 * @param {boolean} [props.password=false] - Enable password visibility toggle
 * @param {string} [props.size] - Tailwind classes for input wrapper size & spacing
 * @param {string} [props.text] - Tailwind classes for input text styling
 * @param {string} [props.inputStyle] - Tailwind classes for radio input container
 * @param {React.ReactNode} [props.children] - Icon or label content inside input
 * @param {Object} rest - Additional native input props (value, onChange, checked, disabled, etc.)
 *
 * @param {React.Ref<HTMLInputElement>} ref - Forwarded ref to the input element
 *
 * @returns {JSX.Element} 
 */
const Input = forwardRef(
  ({ size, label, type, id, password,text, inputStyle,  children, ...rest }, ref) => {
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
              // name={id}
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
                <div className={`${inputStyle ? inputStyle : "border-2  border-[#E8E8E8] group-has-[input:checked]:border-primary"} p-1 rounded-sm w-full flex justify-center`}>
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
              className={`${size ? size : "flex items-center gap-3 mt-2 p-2 px-3"} ${type !== "checkbox" && "border border-[#DEDEDE] rounded-md w-full"} `}
            >
              <span>{children}</span>
              <span className="w-full">
                <input
                  ref={ref}
                  type={password ? (show ? "text" : "password") : type}
                  name={id}
                  id={id}
                  {...rest}
                  className={`outline-none ${text} w-full h-full ${type === "checkbox" && "cursor-pointer"}`}
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

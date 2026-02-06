import { Check, X } from "lucide-react";

export default function Modal({toggle, success, error, children, ...rest }) {
    const isOpen = success || error || toggle;
    console.log("toggel",toggle)
    // console.log("susess",success)
    // console.log("error",error)

  return (
    <div
      {...rest}
      className={`fixed w-full min-h-screen inset-0 z-1000 flex items-start justify-center
        bg-black/10
        transition-opacity duration-300
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()} className={`
        mt-[15%]
          transform transition-all duration-500 ease-out
          bg-white rounded-xl p-6 shadow-xl
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-100 opacity-0"}
        `}
      >
        <button
          {...rest}
          className="absolute cursor-pointer -right-2 -top-2 p-2 bg-gray-100 rounded-full"
        >
          <X size={12} className="text-gray-500" />
        </button>
        <div className="w-full flex flex-col items-center gap-10">
          {error && (
            <div className="p-5 bg-red-200 rounded-full">
              <X className="text-red-600" size={50} />
            </div>
          )}
          {success && (
            <div className="p-5 bg-green-200 rounded-full">
              <Check className="text-green-600" size={50} />
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

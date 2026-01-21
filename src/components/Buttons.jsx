import React from "react";

export function ButtonOrange({ title }) {
  return (
    <button className="bg-[#FF8906] p-2 rounded-md">
      <p>{title}</p>
    </button>
  );
}
export function SosmedAuth() {
  return (
    <>
      <div className="flex justify-center gap-5">
        <button className="flex items-center gap-3 shadow-md border rounded-xl p-3 border-[#DEDEDE]/10 w-full justify-center ">
          <img src="/logos/facebook.png" alt="facebook" />
          <p>Facebook</p>
        </button>
        <button className="flex items-center gap-3 shadow-md border rounded-xl p-3 border-[#DEDEDE]/10 w-full justify-center ">
          <img
            src="/logos/google.png"
            alt="google"
            className="flex items-center gap-"
          />
          <p>Google</p>
        </button>
      </div>
    </>
  );
}

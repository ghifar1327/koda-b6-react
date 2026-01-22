export function Button({ title, orange = false, src, alt ,shadow=false ,onClick, imgSize}) {
  return (
    <button onClick={onClick} className={`${orange && "bg-[#FF8906]"} ${shadow && "shadow-md border border-[#DEDEDE]/10"} p-2 rounded-md flex items-center justify-center gap-5 w-full cursor-pointer`}>
      {src &&  <img src={src} alt={alt} className={imgSize}/>}
      <p>{title}</p>
    </button>
  );
}


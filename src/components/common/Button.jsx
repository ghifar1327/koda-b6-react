export function Button({
  orange = false,
  src,
  alt,
  shadow = false,
  onClick,
  imgSize,
  children,
  size,
  border,
  icon : Icon
}) {
  console.log(!size)
  return (
    <button
      onClick={onClick}
      className={`${orange && "bg-[#FF8906]"} ${shadow && "shadow-md border border-[#DEDEDE]/10"} ${size ? size : "w-full p-2"} ${border} rounded-md flex items-center justify-center gap-5 cursor-pointer`}
    >
      {Icon && <Icon/>}
      {src && <img src={src} alt={alt} className={imgSize} />}
      <p>{children}</p>
    </button>
  );
}

export function Button({
  orange = false,
  src,
  alt,
  shadow = false,
  onClick,
  children,
  size,
  border,
  radius,
  icon: Icon,
  iconSize,
  iconColor
}) { 
   return (
    <button
      onClick={onClick}
      className={`${orange && "bg-[#FF8906]"} ${shadow && "shadow-md border border-[#DEDEDE]/10"} ${size ? size : "w-full p-2 gap-5"} ${border} ${radius ? radius : "rounded-md" } flex items-center justify-center  cursor-pointer`}
    >
      {Icon && <Icon size={iconSize} color={iconColor}/>}
      {src && <img src={src} alt={alt} className={iconSize} />}
      <p>{children}</p>
    </button>
  );
}

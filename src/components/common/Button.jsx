/**
 * Reusable Button component
 *
 * @component
 * @param {Object} props - Button props
 * @param {boolean} [props.orange=false] - If true, button will use orange primary background
 * @param {string} [props.src] - Image source for icon inside button
 * @param {string} [props.alt] - Alt text for icon image
 * @param {boolean} [props.shadow=false] - Adds shadow and subtle border to button
 * @param {React.ReactNode} props.children - Button label or content
 * @param {string} [props.size] - Tailwind classes for width, padding, and gap
 * @param {string} [props.border] - Tailwind border classes
 * @param {string} [props.iconSize] - Tailwind classes for icon size
 * @param {string} [props.radius] - Tailwind classes for border radius
 * @param {"button" | "submit" | "reset"} [props.type="button"] - HTML button type
 * @param {Object} rest - Additional props passed to button element (onClick, disabled, etc.)
 *
 * @returns {JSX.Element} Rendered button component
 */

export function Button({
  orange = false,
  src,
  alt,
  shadow = false,
  children,
  size,
  border,
  iconSize,
  radius,
  type,
  ...rest

}) { 
    return (
    <button
      type={type}
      {...rest}
      className={`${orange && "bg-[#FF8906]"} ${shadow && "shadow-md border border-[#DEDEDE]/10"} ${size ? size : "w-full p-2 gap-5"} ${border} ${radius ? radius : "rounded-md" } flex items-center justify-center  cursor-pointer`}
    >
      {src && <img src={src} alt={alt} className={iconSize} />}
      <p className="flex items-center">{children}</p>
    </button>
  );
}

export default function Input({src, alt, htmlFor,label, type, name, id,value, onChange,placeholder , eye }) {
    
  return (
    <label htmlFor={htmlFor}>
        <p>{label}</p>
        <div className='flex border border-[#DEDEDE] p-2 items-center gap-3 mt-3 rounded-md'>
            <span>
                <img src={src} alt={alt} />
            </span>
            <span className='w-full'>
                <input type={type}  name={name} id={id} value={value} onChange={onChange} placeholder={placeholder} className='outline-none w-full'/>
            </span>
            <span>{type === "password" && <img src={eye} alt="eye"/>}</span>
        </div>
    </label>
  )
}

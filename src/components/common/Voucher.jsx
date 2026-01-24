import React from 'react'

export default function Voucher({image, alt, imageSize, vStyle ,title , description, children}) {
  return (
    <div className={vStyle}>
      <img src={image} alt={alt} className={imageSize}/>
      <section>
        <p className='font-bold lg:text-xl'>{title}</p>
        <p>{description}</p>
        {children}
      </section>
    </div>
  )
}

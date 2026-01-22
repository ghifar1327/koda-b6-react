import React, { Children } from 'react'

export default function AuthLayout({src, alt ,children}) {
  return (
    <main className='grid md:grid-cols-3 h-fit'>
      <section className=' hidden md:flex md:col-span-1'><img src={src} alt={alt} className='w-full'/></section>
      <section className='min-h-screen px-[5%] md:px-[10%] md:h-auto md:col-span-2 p-[10%] flex flex-col justify-center gap-8'>{children}</section>
    </main>
  )
}

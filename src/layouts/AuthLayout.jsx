import React, { Children } from 'react'

export default function AuthLayout({src, alt ,children}) {
  return (
    <>
    <main className='grid grid-cols-3'>
      <section className='col-span-1'><img src={src} alt={alt} className='w-full'/></section>
      <section className='col-span-2 px-[10%] flex flex-col justify-center gap-8'>{children}</section>
    </main>
    </>
  )
}

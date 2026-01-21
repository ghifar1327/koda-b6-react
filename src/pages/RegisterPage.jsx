import React from 'react'
import AuthLayout from '../layouts/AuthLayout'
import Register from '../components/Register'

export default function RegisterPage() {
  return (
    <>
        <AuthLayout src={"/auth2.png"} alt={"coffie"}>
            <Register/>
        </AuthLayout>
    </>
  )
}

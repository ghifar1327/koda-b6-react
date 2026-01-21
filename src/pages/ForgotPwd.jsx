import React from 'react'
import AuthLayout from '../layouts/AuthLayout'
import Forgot from '../components/Forgot'

export default function ForgotPwd() {
  return (
    <AuthLayout src={"/auth3.png"} alt={"woman"}>
        <Forgot/>
    </AuthLayout>
  )
}

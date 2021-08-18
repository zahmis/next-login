import React from "react";
import { useForm } from "react-hook-form";
import {useRouter} from "next/router"

export default function Home() {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => { router.push('/afterRegister') };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <span>NickName</span>
        <input className="row justify-content-center mb-3" {...register("nickname", {required:true})} />
        <span>Email</span>
        <input className="row justify-content-center mb-3" {...register("email", { required: true })} />
        <span>Password</span>
        <input className="row justify-content-center mb-3" {...register("password", { required: true })} />
        <button className="row justify-content-center mb-3" type="submit">Register</button>
        {errors.exampleRequired && <span>This field is required</span>}
      </div>
    </form>
    </>
  )
}

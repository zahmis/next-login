import React from "react";
import { useForm } from "react-hook-form";
import {useRouter} from "next/router"
import usersSample from "../public/usersSample"

export default function AfterRegister() {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => { 
    const userEmail = usersSample.find(elem => elem.email === data.email)
    
    if(userEmail == null){
      console.log('葉末w')
      router.push('/error')
      
      return
    }
    
    // if(data.email.match() )
    console.log(data)
    // router.push('/usersInfo') 
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <span>mail</span>
        <input className="row justify-content-center mb-3" {...register("email", { required: true })} />
        <span>Password</span>
        <input className="row justify-content-center mb-3" {...register("password", { required: true })} />
        <button className="row justify-content-center mb-3" type="submit">Login</button>
        {errors.exampleRequired && <span>This field is required</span>}
      </div>
    </form>
    </>
  )
}

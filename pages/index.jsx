import React from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users?page=2", true);
    xhr.onload = function(){
    console.log(xhr.responseText);
    
    };
    xhr.send();
  };

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
        {errors.exampleRequired && <span>This field is required</span>}
        <button className="row justify-content-center mb-3" type="submit">Register</button>
      </div>
    </form>
    </>
  )
}

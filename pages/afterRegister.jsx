import React,{useState} from "react";
import Modal from 'react-modal'
import { useForm } from "react-hook-form";
import {useRouter} from "next/router"
import usersSample from "../public/usersSample"

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.3)"
  },

  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    width                 : '500px',
    height                : '300px',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#__next')


export default function AfterRegister() {

  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const afterOpenModal = () => {
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => { 
    const userEmail = usersSample.find(elem => elem.email === data.email)
    
    if(userEmail == null){
      openModal()
      console.log(modalIsOpen)
      return 
        <>
          hoge
          <Modal
            isOpen={true}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <h2>Hello</h2>
            <button onClick={closeModal}>close</button>
          </Modal>
      </>
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

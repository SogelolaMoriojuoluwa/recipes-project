import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ApplicationPopup from '../component/ApplicationPopup'
import '../assets/ContactPage.css'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'

const nameValue = /^[A-Za-z\s]+$/
const textValue = /^[A-Za-z\s]+$/
const messageValue = /^[A-Za-z\s]+$/
const emailValue = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


function ContactPage() {
 const [showPopup, setShowPopup] = useState(false)

 const{
  register,
  handleSubmit,
  reset,
  formState: {errors},
 } = useForm();

 const onSubit = (data) => {
  setShowPopup(true)
  reset();
  return data;
 }

  return (
   <>
   <NavBar />
   <section className='form-backgrond'>
    <div className='container d-flex justify-content-center align-items-center form-body py-5 mt-5'>
    <form className='form-content'
    onSubmit={handleSubmit(onSubit)}
    autoComplete='off'
    >
      <h3>Contact us</h3>
      <p>Contact us for any further inquiries, complain or intrest</p>
       <div className=''>
       <label htmlFor="fullname" className='form-label'>Full Name</label>    
       <input type="text" className='form-control form-input'  id='fullname'
       {...register("fullname",{
        required: "Input Fullname",
        minLength: {
          value: 4,
          message: "Name must be at least 4 characters long"
        },
        pattern: {
          value: nameValue,
          message: "Name can only contain letters and spaces",
        },

       })}
       />
      <div className='errors-span mb-2 mt-1'>
        {errors.fullname && (
         <span className="text-danger">
        {errors.fullname.message}
        </span>
         )}
      </div>
        

       
    </div>

      <div className="">
         <label htmlFor="emailName" className='form-label'>Email Address</label>    
       <input type="email" className='form-control form-input'  id='emailName'
       {...register("emailName",{
        required: "Input Email Address",
        pattern: {
          value: emailValue,
          message: "Invalid Email Address ",
        },

       })}
       />
       <div className='errors-span mb-2 mt-1'>
        {errors.emailName && (
         <span className="text-danger">
        {errors.emailName.message}
        </span>
         )}

       </div>
      </div>

        <div className=''>
       <label htmlFor="textMessage" className='form-label'>Reason for contact </label>    
       <input type="text" className='form-control form-input'  id='textMessage'
       {...register("textMessage",{
        required: "Input Reason for contact",
        minLength: {
          value: 10,
          message: "Name must be at least 4 characters long"
        },
        pattern: {
          value: textValue,
          message: "Text can only contain letters and spaces",
        },

       })}
       />
       <div className='errors-span mb-2 mt-1'>
        {errors.textMessage && (
         <span className="text-danger">
        {errors.textMessage.message}
        </span>
         )}

       </div>
    </div>
    <div className=''>
       <label htmlFor="messageName" className='form-label'>Message</label>  
      <textarea id="messageName" className='form-control form-input' rows='3' 
      {...register("messageName",{
        required: "Input Message",
        maxLength: {
          value: 200,
          message: "Message cannot exceed 200 characters"
        },
        pattern: {
          value: messageValue,
          message: "Name can only contain letters and spaces",
        },

       })}
      /> 
      <div className='errors-span mb-3 mt-1'>
        {errors.messageName && (
         <span className="text-danger">
        {errors.messageName.message}
        </span>
         )}

       </div>
    </div>
    <button className='btn btn-secondary' type='submit'>Submit</button>
    </form>
   </div>
 
   </section>
     {showPopup && (
    <ApplicationPopup setShowPopup= {setShowPopup} />
   )}
   <Footer />
   </>
  )
}

export default ContactPage

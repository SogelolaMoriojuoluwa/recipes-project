import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import ApplicationPopup from '../component/ApplicationPopup'
import '../assets/ContactPage.css'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import ContactFood from '../assets/image/contactfood.jpg'
import emailjs from '@emailjs/browser';

const nameValue = /^[A-Za-z\s]+$/ 
const messageValue = /^[A-Za-z\s]+$/
const emailValue = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


function ContactPage() {
 const [showPopup, setShowPopup] = useState(false)
  const form = useRef()
 const{
  register,
  handleSubmit,
  reset,
  formState: {errors},
 } = useForm();


 const sendEmail = () => {
  emailjs.sendForm('service_v58twu4','template_9a3h1js', form.current, {
    publicKey: 'BWnsXNRekXz5Ag7zU'
  })
  .then(
    () => {
      console.log('Message was successfully sent')
    },
    (error) => {
      console.log('Falied', error.text)
    }
  )
 }

 const onSubit = (data) => {
  setShowPopup(true)
  sendEmail();
  reset();
  return data;
 }

  return (
   <>
   <NavBar />
   
   <section className='form-backgrond py-5'>

    <div className='contact-food'>
    <img src={ContactFood} alt="" />
   </div>
  
    <div className='container d-flex justify-content-center flex-lg-row flex-sm-column gap-3 form-body mt-3'>
    <form className='form-content' 
    ref={form}
    onSubmit={handleSubmit(onSubit)}
    autoComplete='off'
    >
      <h3 className='contact'>Contact us</h3>
      <p>Contact us for any further inquiries, complain or intrest</p>
       <div className=''>
       <label htmlFor="fullname" className='form-label'>Full Name</label>    
       <input type="text" className='form-control form-input' name='fullname' id='fullname'
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
       <input type="email" className='form-control form-input' name='emailName'  id='emailName'
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
       <select className='form-select' name="textMessage" id="textMessage"
        {...register("textMessage",{
        required: "Select an option",
       })}
       >
        <option value="">-----Select Reason-----</option>
        <option value="one">-Missing Ingredients or Substitutions</option>
        <option value="two">-Confusing Instructions</option>
        <option value="three">-No Way to Adjust Serving Sizes</option>
        <option value="four">-Lack of Visual Guidance</option>
        </select>   
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
      <textarea id="messageName" className='form-control form-input' name='messageName' rows='5' 
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
    <button className='btn btn-secondary d-grid col-12 mx-auto' type='submit'>Submit</button>
    </form>


    <div className='d-flex align-items-end'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63347.81207772513!2d3.332565456479016!3d7.098360547772819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1752077117242!5m2!1sen!2sng" width="350" height="270" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   </div>      
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

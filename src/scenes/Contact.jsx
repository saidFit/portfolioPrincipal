import React ,{ useRef, useState }from 'react'
import { GradianLine } from '../components/GradientLine'
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const animateHorizontal = {
  hidden:{opacity:0,y:-50},
  visible:{opacity:1,y:0}
}

function Contact() {
  const [isValidSub,setisValidSub] = useState(false);
  const [isnoValidSub,setisnoValidSub] = useState(false);
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const form = useRef();

  const sendEmail = async(e) => {
    e.preventDefault();
    const isValid = await trigger();
    if (!isValid) {
      setisValidSub(false)
      setisnoValidSub(true)
      // setTimeout(() => {setisnoValidSub(false);}, 3000);
      return;
    }
    emailjs.sendForm('service_fezk95w', 'template_r2p5n5i', form.current, 'XVe3HK46p9ywkDn9w')
      .then((result) => {
          console.log(result.text);
          console.log('message sent')
      }, (error) => {
          console.log(error.text);
      });
      setisValidSub(true);
      setisnoValidSub(false)
      setTimeout(() => {setisValidSub(false);}, 3000);
  };



  return (
    <>
    {isValidSub && <motion.p
       className='fixed top-8 z-30 left-[40%] translate-x-[-50%] rounded-[3px] translate-y-[-50%] bg-green-600 text-white p-3 rounded-ms'
       initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={animateHorizontal}
       >your submit has been successfully.</motion.p>}

{isnoValidSub && <motion.p
       className='fixed top-8 z-30 left-[40%] translate-x-[-50%] rounded-[3px] translate-y-[-50%] bg-rose-600 text-white p-3 rounded-ms'
       initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={animateHorizontal}
       >your submit has a error!.</motion.p>}
    
    <div className='pt-12 pb-20 w-full space-y-8 md:space-y-0 md:w-4/5 mx-auto flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-end'>
      <div className='w-full max-w-4xl m-auto md:w-[45%] '>
      <img
        alt="profile"
        className="hover:filter rounded-lg w-full h-[300px] object-cover hover:saturate-200 transition duration-500 z-10"
        src="/assets/skill.jpg"
        />
      </div>  
     {/* FORM */}
      <div className='space-y-4 w-full max-w-4xl m-auto md:w-[45%]'>

        <div className='w-fit space-y-3'>
         <h1 className='text-3xl font-playfair'>contact me to get started.</h1>  
         <GradianLine/> 
        </div>
        

        {/* <form ref={form} onSubmit={sendEmail} className='text-black'>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}

        <form
        ref={form} onSubmit={sendEmail}
        className='flex flex-col space-y-4 w-full'>
          
         <input 
         className='border border-gray-300 outline-none py-6 px-4 rounded-md w-full text-black '
         type="text"
         name="user_name"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
          />
          {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
         <input
          className='border border-gray-300 outline-none py-6 px-4 rounded-md w-full text-black '
          type="text"
          name="user_email"
          placeholder="EMAIL"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
           />
           {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
         <textarea
          className='border border-gray-300 outline-none py-6 px-4 rounded-md w-full text-black '
          name="message"
          placeholder="MESSAGE"
          rows="4"
          cols="50"
          {...register("message", {
            required: true,
            maxLength: 2000,
          })}
           />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}
          <button className='bg-blue py-2 rounded-md max-w-[100px] text-white'>Sumbit</button>
        </form> 
      </div>
    </div>
    </>
    
  )
}

export default Contact
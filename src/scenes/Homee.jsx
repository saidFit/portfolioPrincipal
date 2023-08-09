import React, { useEffect, useState } from 'react'
import { centerAAbsolute, flexItems } from '../Hooks/useStyling'
import {motion} from 'framer-motion'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SocialMediaIcon } from '../components/SocialMediaIcon';
import logo from '../assets/profile3.jpeg';

const animateHorizontal = {
  hidden:{opacity:0,x:-50},
  visible:{opacity:1,x:0}
}

const animateVertical ={
  hidden:{opacity:0,y:30},
  visible:{opacity:1,y:0}
}
export const Homee = ({SelectedPage,setSelectedPage}) => {

  const arr = ['Saftware developer','Frontend','Backend']
  const [text,setText] = useState('')
  const [index,setIndex] = useState(0)
  const [split,setSplit] = useState(1)
  
  
  useEffect(()=>{
      let interval = setInterval(() => {
            let split_var = arr[index].substring(0,split)
  
            setText(split_var)
            setSplit(split + 1)
             
            if(split >= arr[index].length){
                
                if(index >= arr.length -1){
                  setIndex(0)
                  setSplit(1)
                  return;
                }
                
               setIndex(index +1)
               setSplit(1)
            }
             
      }, 200);
  
      return () => clearInterval(interval)
  },[text])

  return (
    <section
      id="home"
      className="mt-12 md:flex md:justify-between md:items-center gap-16 md:h-full py-12 w-[80%] mx-auto"
      >
        <article style={flexItems} className= 'justify-center md:justify-between flex-col-reverse items-center md:flex-row py-10 w-[90%] mx-auto h-full'>
          <section className='w-full flex flex-col space-y-4 my-7 md:my-0 justify-center xs:items-center md:items-start'>
            <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={animateHorizontal}
             className='text-3xl'>Hyy ! I Am</motion.p>
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay:0.3 , duration: 0.5 }}
        variants={animateHorizontal}
        style={flexItems} className='w-full xs:justify-center md:justify-start'>
             <p className='text-3xl'>said-</p>
            <div className='relative w-fit'>
             <img className='w-[200px] h-[50px] relative right-6 object-cover' src='/assets/Brush Stroke-blue.png'></img>   
             <span style={{...centerAAbsolute}} className='text-3xl ml-3 font-bold'>bifalan</span>   
            </div>  
      
        </motion.div>
           
             <motion.p
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{delay:.4, duration: 0.5 }}
             variants={animateHorizontal}
             className='text-2xl font-[400] border-l-2 border-white px-2'>{text}</motion.p> 
         
            <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:.5 , duration: 0.5 }}
            variants={animateHorizontal}
            className='w-full max-w-[600px]'>Saftware Developer Width Hight Level Of Right Experience In Web developement And Then Producting The Quality Work using the various technology</motion.p>
            <AnchorLink
            className='bg-primary-500 w-fit rounded-md py-1 px-3 shadow-md hover:bg-primary-600 transition duration-500'
            onClick ={() => setSelectedPage(!SelectedPage)}
            href  = '#contact'
            >
            contact me
            </AnchorLink>

            <SocialMediaIcon/>
          </section>

          <motion.div
          initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={animateVertical}
            className='
            relative before:absolute before:border-2
             before:h-full before:-top-0 before:-left-0 md:before:-top-10 md:before:-left-10 before:z-[-3] before:border-primary-500 
             before:rounded-t-full before:w-full
             '
          >
            <img
              alt="profile"
              className="hover:filter w-[400px] rounded-t-[400px] h-[400px] object-cover hover:saturate-200 transition duration-500 z-10"
              src={logo}
            />
          </motion.div>
        </article>
    </section>
  )
}

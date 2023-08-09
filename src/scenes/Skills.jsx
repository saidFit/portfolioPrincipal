import React, { useState } from 'react'
import {flexBetweenFull} from '../Hooks/useStyling'
import {motion} from 'framer-motion'
import { GradianLine } from '../components/GradientLine'
import { SkillsSlider } from '../components/SkillsSlider'
const animateHorizontal = {
    hidden:{opacity:0,x:-50},
    visible:{opacity:1,x:0}
  }
  
  const animateVertical ={
    hidden:{opacity:0,y:30},
    visible:{opacity:1,y:0}
  }

export const Skills = () => {


  return (
    <section id="skills" className="pt-10 pb-20 w-4/5 mx-auto">
      <div className='w-fit relative mx-auto'>
      <h1 className='text-3xl'>My_<span className='text-primary-600 font-[500] text-3xl'>Skills</span></h1>
      <GradianLine width='w-full'/>
      </div>
      
       <div className='flex flex-col-reverse mt-32 items-center justify-between md:flex-row md:items-start md:space-y-0'>
        <div className='w-full md:w-5/12 space-y-4 mt-5 md:mt-0'>
            <div className='w-fit'>
              <h1><span className='text-primary-600 font-[500] text-3xl'>Skills</span></h1>
              <GradianLine width="w-full"/> 
            </div>
           
            <p>Full Stack Developer Width Hight Level Of Right
             Experience In Web Designing And Intermidiate In
              Backend,Then Producting The Quality Work
            </p>
        </div>

        <motion.div
          initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={animateVertical}
            className='w-full md:w-1/2
            relative before:absolute before:border-2
             before:h-full before:-top-0 before:-left-0 md:before:-top-10 md:before:-left-10 before:z-[-3] before:border-primary-500 
              before:w-full
             '
          >
            <img
              alt="profile"
              className="hover:filter rounded-lg w-full h-[300px] object-cover hover:saturate-200 transition duration-500 z-10"
              src="/assets/skill.jpg"
            />
          </motion.div>
       </div>

       <SkillsSlider/>
    </section>
  )
}

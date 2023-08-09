import React from 'react'
import { GradianLine } from '../components/GradientLine'
import {Projects as data} from '../data/data.js';
import {motion} from 'framer-motion'

const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

function Projects() {
  return (
    <div id="projects"
    className='pt-12 pb-20 w-4/5 mx-auto'>
        <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 0.5 }}
         variants={{
           hidden: { opacity: 0, y: -50 },
           visible: { opacity: 1, y: 0 },
         }}
        >
        <div className='w-fit relative mx-auto'>
      <h1 className='text-3xl'>Pro_<span className='text-primary-600 font-[500] text-3xl'>jects</span></h1>
      <GradianLine width='w-full'/>
      </div>
        <p className='w-full  max-w-lg mx-auto my-8 text-center'>About Projects a have a lot of them
             can you go stay down to show the
              most project have a lot knowledge
               can you see that in this project
                check it now...
        </p>
        </motion.div>
       
       <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
       className='w-full gap-3 dark:border dark:border-gray-300 dark:rounded-md p-3 max-w-4xl mx-auto flex flex-wrap justify-center items-start'>
         {data.map((item,key)=>{
          const {image,hoverImage,LinkGithup,LinkDemo,} = item;
          const overlayStyles = `absolute inset-0 h-full w-full opacity-0 hover:opacity-100 transition duration-500
             bg-grey z-30 flex flex-col content-around items-center justify-center text-center space-y-12 p-5 text-deep-blue`;
          
            return(
                <motion.div
                key={key}
                variants={projectVariant}
                className='relative w-[260px] h-[260px]'>
                   <img className='w-full h-full object-cover' src={image} alt="" /> 
                   <div className={`${overlayStyles}`}>
                    {hoverImage.map((item,key) =>{
                    const projectTitle = item.name.split(" ").join("-").toLowerCase();
                    return(
                      <div key={key}>
                        <h1>{projectTitle}</h1>
                        <p>{item.desc}</p>
                    </div>  
                    )
                    
                   })}

                   <div className='flex w-full items-center justify-between px-3'>
                    <button className='border border-gray-400 rounded-md py-1 px-3 bg-blue text-white'><a href={LinkGithup}>githup</a></button>
                    <button className='border border-gray-400 rounded-md py-1 px-3 bg-blue text-white'><a href={LinkDemo}>View</a></button>
                   
                   </div>
                   </div>
                   
                </motion.div>
            )
         })}
       </motion.div>

    </div>
  )
}

export default Projects
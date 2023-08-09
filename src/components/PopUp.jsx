
import React, { useState } from 'react'
import { IoIosCloseCircle } from 'react-icons/io'
import { PopUpSkills } from '../data/data'
import { absoluteCenter1, FlexBetweenItems, transition } from '../Hooks/useStyling'
import { GradianLine } from './GradientLine'
import {motion} from 'framer-motion'

const animateVertical ={
  hidden:{opacity:0,y:30},
  visible:{opacity:1,y:0}
}

export const PopUp = ({IsPopUp,setIsPopUp,setActivButton,setActiveElement,ActivButton,ActiveElement}) => {
    let position = ''
    const handleChangePosition = (index) =>{
        setActivButton(index)
        setActiveElement(index)
    }
  return (
    <section
    className='form' style={{background:'rgba(0, 0, 0, 0.293)',position:'fixed',zIndex:1003,top:0,left:0,right:0,bottom:0,...transition,opacity:IsPopUp ? 1 : 0,pointerEvents: IsPopUp ? 'initial':'none'}}>
         <button onClick={()=>setIsPopUp(!IsPopUp)} style={{position:'absolute',top:'7%',right:'15%',}}><IoIosCloseCircle size={35}/></button>
      <div
      className=' bg-gray-200 shadow-xl rounded-md border-l-2 max-w-[350px] ss:max-w-[800px] border-gray-600 dark:bg-gray-900 py-2 px' style={{width:'100%',mx:'auto',...absoluteCenter1}}>
        <div className=' space-y-11'>
            <div className='space-x-3 pb-2 flex gap-7 border-b border-gray-500' style={{margin:'12px auto',justifyContent:'center',gap:'7px',flexWrap:'wrap',textAlign:'center'}}>
             {PopUpSkills.map((item,index) =>{
                
                return(
                    <button type="button" key={index} onClick={() => handleChangePosition(index)} className={ActivButton == index ? 'bg-primary-500 border border-gray-500 rounded-md py-1 px-2 dark:border-white':'border border-gray-500 gap-4 rounded-md py-1 px-2 dark:border-white'}>{item.button}</button>
                )
             })}
            </div>
           <div style={{...transition,...FlexBetweenItems,position:'relative',overflow:'hidden',height:'300px',maxWidth:'900px',width:'100%',margin:'12px auto'}}>
            {PopUpSkills.map((item,index) =>{
                 if (index == ActiveElement) {
                    position = "ActiveSlider";
                  } else if (index == item.length - 1 && ActiveElement == 0) {
                    position = "PrevSlider";
                  } else if (index == ActiveElement - 1) {
                    position = "PrevSlider";
                  } else {
                    position = "NextSlider";
                  }
                return(
                    <div key={index} className={`${position}`} elevation={8} style={{...transition,borderRadius:'14px',position:'absolute',margin:0,height:'100%',maxWidth:'900px',width:'100%',}}>
                       <div className='py-2 px-4 space-y-6'>
                        <div className='w-fit mx-auto'>
                          <p className='text-xl'  style={{margin:'0 auto',borderBottom:'1px solid',width:'fit-content'}}>{item.header}*</p>
                       <GradianLine width="w-full"/> 
                        </div>
                       
                       <div className='w-fit'>
                       <p className='font-[600] text-lg'>{item.title}</p>
                       <GradianLine width="w-full"/>  
                       </div>
                       
                       <p>{item.desc}</p>
                    </div>  
                    </div>
                   
                )
            })}
           </div>
        </div>
        
      </div>  
    </section>
  )
}

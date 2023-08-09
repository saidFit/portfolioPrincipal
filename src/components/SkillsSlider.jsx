
import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { PopUpSkills, SkillsData } from '../data/data';
import { GradianLine } from './GradientLine';
import { PopUp } from './PopUp';
export const SkillsSlider = () => {

    const [IsPopUp,setIsPopUp] = useState(false)
  const [ActivButton,setActivButton] = useState (null)
  const [ActiveElement,setActiveElement] = useState(0)

  const handlePopUp = (index)=>{
      setIsPopUp(!IsPopUp)
      setActivButton(index)
      setActiveElement(index)
  }
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <>
     <section className='mt-20 space-y-12'>
     <div className='w-fit mx-auto'>
      <h1 className='text-3xl'>My Knowledge</h1>
      <GradianLine width='w-full'/>
      </div>
        <Carousel responsive={responsive}>  
        {SkillsData.map((skill,index) =>{
          const {header,logo,title,size} = skill
          return(
          <div onClick={() => handlePopUp(index)} key={index} className='relative slider-skill overflow-hidden flex items-center justify-center ml-3 w-[90%] py-6 shadow-xl border border-gray-300 text-center bg-gray-100 rounded-lg dark:bg-gray-800'>
            <div style={{position:'relative',zIndex:3}}>
            <div className='w-fit mx-auto mb-2'>
             <div className='py-1 px-2 rounded-xl shadow-xl text-xl font-[500]'>{header}*</div>
             <GradianLine width='w-full'/>   
            </div>
           
          <button className='skill p-4 rounded-full' style={{border:'7px solid #fff',margin:'0 auto',display:'block',position:'relative',background: `conic-gradient(rgb(8,145,170)${size}%,#ddd ${size}%)`}}>
            {logo}
          </button>
          <p>{title}</p>
            </div>
            <div className='absolute show-element z-40 rounded-lg inset-0 bg-[#00000053] dark:bg-[#97979768] top-[200%] flex justify-center items-center'>
              <button className='bg-primary-500 rounded-md py-1 px-3 shadow-md hover:bg-primary-600 transition duration-500'>Show more</button>
            </div>
        </div>
          )
        })}
    </Carousel>
     </section>  

     <PopUp
        setIsPopUp={setIsPopUp}
        IsPopUp={IsPopUp}
        ActivButton={ActivButton}
        ActiveElement={ActiveElement}
        setActivButton={setActivButton}
        setActiveElement={setActiveElement}
          />
      </>
      );
  
}

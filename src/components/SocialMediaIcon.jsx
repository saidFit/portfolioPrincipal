import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
export const SocialMediaIcon = () => {
  return (
    <div className='flex items-center justify-between space-x-2'>
        <div>
           <a href="#"
           target="_blank"
           rel='noreferrer'
           >
            <AiFillLinkedin size={30} className=' transition duration-500 hover:opacity-80'/>
            </a> 
        </div>
        <div>
           <a href="#"
           target="_blank"
           rel='noreferrer'
           >
           <FaFacebook size={30} className=' transition duration-500 hover:opacity-80'/>
            </a> 
        </div>
        <div>
           <a href="#"
           target="_blank"
           rel='noreferrer'
           >
            <AiFillGithub size={30} className=' transition duration-500 hover:opacity-80'/>
            </a> 
        </div>
    </div>
  )
}

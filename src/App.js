import React, { useEffect, useState } from 'react'
import { Dotgroup } from './components/Dotgroup'
import { GradianLine } from './components/GradientLine'
import useMediaQuery from './Hooks/userMediaQuery'
import { Homee } from './scenes/Homee'
import { NavBar } from './scenes/NavBar'
import { Skills } from './scenes/Skills'
import Projects from './scenes/Projects'
import Contact from './scenes/Contact'

export const App = () => {
  const [SelectedPage,setSelectedPage] = useState('home')
 console.log(useMediaQuery("(min-width: 768px)"))

// TODO: dark-theme ..//

const [SizeScreen,setSizeScreen] = useState('15px')
const [colorButtons,setcolorButtons] = useState('#00D5FA')
const [backgroundColor,setbackgroundColor] = useState('#F0F0F0')
const [darkThem,setDarkThem] = useState('dark')

useEffect(()=>{
if(darkThem === 'dark'){
  document.body.classList.add('dark')
}else{
  document.body.classList.remove('dark')
  document.body.style.background = '' 
}
},[darkThem])


useEffect(()=>{
  document.documentElement.style.fontSize = SizeScreen
},[SizeScreen,colorButtons])
  return (
    <div>
      <NavBar 
      SelectedPage={SelectedPage}
      setSelectedPage={setSelectedPage}
      />
      <Dotgroup
       SelectedPage={SelectedPage}
       setSelectedPage={setSelectedPage}
      />
      <Homee/>
      <GradianLine/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

import React, { useEffect } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";



const GroupeLink = ({Page,SelectedPage,setSelectedPage}) =>{
    const lowerCasePage = Page.toLowerCase();

    const selectedStyles = 
   `relative bg-blue before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-blue before:left-[50%] before:top-[50%] before:translate-x-[-50%] before:translate-y-[-50%] hover:text-blue transition duration-500`;

    return (
        <AnchorLink
        href={`#${lowerCasePage}`}
        className={`${
            SelectedPage === lowerCasePage ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage(lowerCasePage)}
      />
      );
}

export const Dotgroup = ({SelectedPage,setSelectedPage}) => {

  useEffect(()=>{
    console.log(SelectedPage);
  },[SelectedPage])

  return (

    <div className='flex flex-col gap-4 fixed top-[50%] right-3 md:right-12'>
        <GroupeLink
        Page={'home'}
        SelectedPage={SelectedPage}
        setSelectedPage={setSelectedPage}
        />
        <GroupeLink
        Page={'skills'}
        SelectedPage={SelectedPage}
        setSelectedPage={setSelectedPage}
        />
        <GroupeLink
        Page={'projects'}
        SelectedPage={SelectedPage}
        setSelectedPage={setSelectedPage}
        />
        <GroupeLink
        Page={'contact'}
        SelectedPage={SelectedPage}
        setSelectedPage={setSelectedPage}
        />
    </div>
  )


}

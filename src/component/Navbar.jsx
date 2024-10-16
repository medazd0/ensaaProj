import React from 'react'
import ensaLogo from '../assests/ensaLogo.png'
import { Link } from 'react-router-dom';

export default function Navbar() {
  const gotoAbout =()=>{
    const About = document.getElementById("aboutEnsa") 
     About.scrollIntoView();
  }
  const gotodiv =()=>{
    const gotoMe = document.getElementById("aboutMe");
    gotoMe.scrollIntoView() ;
  }
  return (
   <div className="flex justify-between  p-3 absolute top-0 left-0 right-0 backdrop-blur backdrop-contrast-  z-50">
   <img  src={ensaLogo} alt='logo' className="w-1/6"/>
    <div className="flex  gap-8 place-items-center  ">
      <div className='text-cyan-100 text-2xl cursor-pointer ' onClick={()=>gotoAbout()}>About EnsaA </div>
      <div className='text-cyan-100 text-2xl cursor-pointer' onClick={()=>gotodiv()} >About Developper</div>
      <div className=" transition ease-in-out delay-150  shadow-sm border-solid bg-blue-500 p-4 rounded-lg  hover:bg-blue-400 hover:scale-105 duration-75 ">
        <Link to="/signUp">
      <div className='text-cyan-100 text-2xl cursor-pointer w-full h-full "  '>Sing UP</div>
  
      </Link>    </div>
    </div>

   </div>
  )
}

import React from 'react'
import '../App.css'
import coverVideo from '../assests/coverVideo.mp4'
import { Link } from 'react-router-dom'
import { CiPaperplane } from "react-icons/ci";
import { motion } from 'framer-motion'

export default function Main() {
  
  return (
 <div className='main' >
<video src={coverVideo} autoPlay muted loop />
<div className='overlay' ></div>
<Link to="/Sign_In">
<motion.div 
whileHover={{ scale: 1.2 }}
className='getStarted'>
<button class="btngetStarted ">getStarted</button>
<div className='w-1/6 flex justify-center items-center text-3xl text-cyan-700 hover:text-sky-400 '> <CiPaperplane /></div>
</motion.div>
</Link>
 </div>


  )
}

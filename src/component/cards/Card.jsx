import React, { useEffect, useRef } from 'react'
import '../../App.css'
import { motion,useScroll ,useTransform} from 'framer-motion'
import Lenis from 'lenis'

export default function Card({i, image, text ,color ,range , targetScale , progress }) {
useEffect(()=>{
  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
},[])
  const container =useRef(null);
  const { scrollYProgress } =useScroll({
target:container ,
offset:['start end' ,'start start']
  })
  const imgScale =useTransform(scrollYProgress,[0 , 1],[2, 1])
 const scale =useTransform( progress , range , [1,targetScale])
  return (
    <div ref={container} className="cardContainer">
            <motion.div style={{scale:scale ,backgroundColor: color, top:`calc(${ i * 25 }px)`}}  className='card'>
            
              <div className="flex flex-row ">
                
                <p className='paraAbout ,flex items-center text-center w-1/2 '>{text}</p>
                <div  className="imageContainer">
                        <motion.div style={{scale:imgScale}} className="Inner">
                        <img src={image} alt='img' className='rounded-lg full '/>
                        </motion.div >
                </div>
                
              </div>


            </motion.div>
      </div>
  )
}

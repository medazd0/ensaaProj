import React, { useRef } from 'react'
import '../App.css'
import {ABOUT_TXT_IMG as proj} from '../constants/index'
import Card from './cards/Card'
import { useScroll } from 'framer-motion'


export default function About() {
  const container =useRef(null);
  const { scrollYProgress } =useScroll({
target:container ,
offset:['start start' ,'end end']
  })

  return (

    <main ref={container}  >
      <div className="cadsContainer">
      <p className=' text-center  text-4xl text-slate-600 mt-20 mb-10 sticky top-10 ' id ="aboutEnsa">About EnsaA</p>

      {
      proj.map((card,index)=>{
      const targetScale= 1 -(4- index)*0.05  
        return <Card key={index} i={index} {...card} range={[ index * 0.25 , 1]} targetScale={  targetScale } progress={scrollYProgress} />
      })

      }
    </div>
    </main>
  )
}

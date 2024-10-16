import React from 'react'
import './style/footer.css'
import ensaLogo from '../assests/ensaLogo.png'
import img0 from '../assests/media/img2.svg'
import img1 from  '../assests/media/img3.svg'
import img2 from  '../assests/media/img4.svg'
import img3 from '../assests/media/img5.svg'
import  img4 from '../assests/media/img6.svg'
import { BiLogoInstagram } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className='ContainerFooter' id="aboutMe" >
      <div className=" w-full flex flex-col justify-center items-center ">
        <img src={ensaLogo} alt="logoimg" className=' w-40 h-15' />
      </div>
      <div className="colobContainer">
      <h4 className='text-center mt-10 text-4xl text-gray-400 shadow mb-7 '>Colaborations</h4>

        <div className="containerImg">
              <div className="img1">
                      <img src={img0} alt="" />
              </div>
              <div className="img2">
                        <img src={img1} alt="" />
              </div>
              <div className="img3">
                      <img src={img2} alt="" />
              </div>
              <div className="img4">
                        <img src={img3} alt="" />
              </div>
              <div className="img5">
                      <img src={img4} alt="" />

              </div>
            </div>
    
      </div>
      <div className=" ">
       <h2 className='text-center text-4xl text-gray-500'>Social of Devloper</h2>
    
       <div className="flex justify-center items-center gap-10 m-5">
        <div className="">
        <BiLogoInstagram  className='text-5xl  text-[#E4405F]'/>
        </div>
        <div className="iconLinkdin">
        <CiLinkedin className='text-5xl text-[#0077B5] ' />
        </div>
        <div className="iconGitub">
        <FaGithub className='text-5xl text-black' />
        </div>
       
    </div>
    <p className='footerTxt , text-center mt-8'>Developed by Med AZOUD @2024</p>
      </div>


















    </footer>
  )
}

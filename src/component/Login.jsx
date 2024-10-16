import React from 'react'
import '../component/style/login.css'
import { GrClose } from "react-icons/gr";
import {Link}  from 'react-router-dom'

export default function Login() {
  return (
    <div className='absolute top-36 left-1/3 bg-[#424769] w-1/3 flex flex-col  justify-center items-center  rounded-lg'>
      <Link to="/"> <GrClose className='absolute right-3 top-3 text-2xl  text-red-600' /></Link>
      <h3 className='text-3xl text-[#ffffff] p-5 mb-3'>Sign up</h3>
      <div className=" containerForm , w-full h-full flex pl-2 pr-2  ">
      <form action="" className='w-full  flex flex-col'>
            <div className=" w-full mb-5  flex flex-row">
            <div className="w-1/2 text-2xl text-[#ffffff] opacity-60" >first Name</div>
            <div className="w-1/2">
            <input type="text" name="" id=""  className='w-full h-15 bg-[#676F9D] rounded-md hover:outline-none focus:outline-none'/>
            </div>
            </div>

            <div className=" w-full mb-5  flex flex-row">
            <div className="w-1/2 text-2xl text-[#ffffff] opacity-60">last Name</div>
            <div className="w-1/2">
            <input type="text" name="" id=""  className='w-full h-15 bg-[#676F9D] rounded-md hover:outline-none focus:outline-none'/>
            </div>
            </div>


            <div className=" w-full mb-5  flex flex-row">
            <div className="w-1/2 text-2xl text-[#ffffff] opacity-60">Email</div>
            <div className="w-1/2">
            <input type="text" name="" id=""  className='w-full h-15 bg-[#676F9D] rounded-md hover:outline-none focus:outline-none'/>
            </div>
            </div>



            <div className=" w-full mb-5  flex flex-row">
            <div className="w-1/2 text-2xl text-[#ffffff] opacity-60">Password</div>
            <div className="w-1/2">
            <input type="text" name="" id=""  className='w-full h-15 bg-[#676F9D] rounded-md hover:outline-none focus:outline-none' onChange={(e)=>{}}/>
            </div>
            </div>

            <div className=" w-full mb-5  flex flex-row">
            <div className="w-1/2 text-2xl text-[#ffffff] opacity-60">Confirme Password</div>
            <div className="w-1/2">
            <input type="text" name="" id=""  className='w-full h-15 bg-[#676F9D] rounded-md hover:outline-none focus:outline-none' onChange={(e)=>{}}/>
            </div>
            </div>

            <div className=" w-full mb-5  flex flex-row">
            <div className="w-1/2 text-2xl text-[#ffffff] opacity-60">Who Are U ?</div>
            <div className="w-1/2">
            
              <select name="" id=""className='w-full h-15 p-2 bg-[#676F9D] rounded-md hover:outline-none focus:outline-none  '>
                <option value="teacher text-1xl">Teacher</option>
                <option value="student text-1xl">Student</option>
              </select>
            </div>
            </div>
            <div className=" w-full mb-5  flex flex-row">
            <div className="w-1/2 text-2xl text-[#ffffff] opacity-60">Niveau</div>
            <div className="w-1/2">
              <select name="" id=""className='w-full h-15 p-2 bg-[#676F9D] rounded-md hover:outline-none focus:outline-none'>
                <option value="teacher text-2xl">Cp</option>
                <option value="student text-2xl">Ci</option>
              </select>
            </div>
            </div>

        <input  type="submit" value="Save"  className='bg-[#F9B17A] cursor-pointer mb-2 hover:bg-[#FBCDA0] '/>
      </form>

      </div>
    </div>
  )
}

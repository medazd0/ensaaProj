import React from 'react'
import { FaSquareGooglePlus } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import {Link}  from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='absolute z-50 top-1/4 left-1/3 translate-x-20 bg-[#424769] w-1/4 p-10 rounded-md shadow-lg '>
            <Link to="/"> <GrClose className='absolute right-1 top-1 text-2xl  text-red-600' /></Link>

      <div className='flex flex-row'>
  <h4 className='text-3xl text-[#ffffff] pb-5'>
    Hello! Welcome back 
  </h4>
  <p className='text-2xl pl-2'>👋</p>
  </div>
       <form className='flex flex-col gap-y-4 w-full h-full'>
        <div className='w-full h-14 bg-[#676F9D] '><div className='text-sm text-[#424769] pl-2'>Username</div><input type='text'  className='w-full h-1/3 bg-[#676F9D] rounded-none hover:outline-none focus:outline-none' onChange={(e)=>{}}/></div>
        <div className='w-full h-14 bg-[#676F9D] '><div className='text-sm text-[#424769] pl-2'>Password</div><input type="password" name="" id="" className='w-full h-1/3 bg-[#676F9D] rounded-none hover:outline-none focus:outline-none' onChange={(e)=>{}}/></div>
        <p className='text-end text-sm text-[#ffffff] opacity-60 cursor-pointer'>forget Password ?</p>
        <input type="submit" value="Sign In" className='w-full bg-[#F9B17A] cursor-pointer bg-[#F9B17A] cursor-pointer mb-2 hover:bg-[#FBCDA0]' />   
      </form>
      <div className="flex flex-col items-center">
        <p className='mt-5 text-2xl text-[#ffffff] opacity-60'>connect with :</p>
        <div className='flex gap-3 mt-2 '>
          <div className="google"><FaSquareGooglePlus className='text-[#676F9D] text-2xl cursor-pointer' /></div>
          <div className="facebook"><FaSquareFacebook className='text-[#676F9D] text-2xl cursor-pointer' /></div>
        </div>
        <Link to="/signUp">
        <div className='flex gap-3 '><p className='text-sm text-[#676F9D]'>Dont have Account ?</p><p className='text-sm text-[#ffffff] opacity-60 uppercase underline cursor-pointer '>Create Account</p></div>

        </Link>
      </div>
    </div>
  )
}

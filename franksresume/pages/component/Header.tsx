'use client'
import { truncate } from 'fs/promises'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { GiSplitCross } from "react-icons/gi"
export const Header = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <section className='bg-slate-200'>
      <div className='flex justify-between items-center'>
        <h1 className='font-SignatureName m-8'>ZAHID HUSSAIN</h1>
        <ul className='m-7 md:flex hidden'>
          <li className='mx-5 text-2xl font-SignatureName hover:scale-125 duration-300'> Home </li>
          <li className='mx-5 text-2xl font-SignatureName hover:scale-125 duration-300'> About </li>
          <li className='mx-5 text-2xl font-SignatureName hover:scale-125 duration-300'> Portfolio </li>
          <li className='mx-5 text-2xl font-SignatureName hover:scale-125 duration-300'> Skills </li>
          <li className='mx-5 text-2xl font-SignatureName hover:scale-125 duration-300'> Contact </li>
        </ul>
        <div className='pr-5 md:hidden z-20'
          onClick={() => {
            setToggle(!toggle);
            console.log(toggle);
          }}
        >
          {toggle ? <GiHamburgerMenu size={30} /> : <GiSplitCross color='white' size={30} />}
        </div>
        {!toggle ? (
          <div className=' fixed top-0 left-0 bg-black h-screen text-red-400 w-full flex items-center justify-center'>
            <ul className='m-7 text-white'>
              <li className='mx-5 my-2 text-8xl font-SignatureName'> Home </li>
              <li className='mx-5 my-2 text-8xl font-SignatureName'> About </li>
              <li className='mx-5 my-2 text-8xl font-SignatureName'> Portfolio </li>
              <li className='mx-5 my-2 text-8xl font-SignatureName'> Skills </li>
              <li className='mx-5 my-2 text-8xl font-SignatureName'> Contact </li>
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default Header;
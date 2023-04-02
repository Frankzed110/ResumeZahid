import React from 'react'

export default function Header() {
  return (
    <section className='bg-slate-200'>
      <div className='flex justify-between'>
      <h1 className='font-SignatureName m-8'>ZAHID HUSSAIN</h1>
   <ul className='m-7 flex'>
  <li className='mx-5 text-2xl font-SignatureName'> Home </li>
  <li className='mx-5 text-2xl font-SignatureName'> About </li>
  <li className='mx-5 text-2xl font-SignatureName'> Portfolio </li>
  <li className='mx-5 text-2xl font-SignatureName'> Skills </li>
  <li className='mx-5 text-2xl font-SignatureName'> Contact </li>
   </ul>
   </div>
    </section>
  )
}

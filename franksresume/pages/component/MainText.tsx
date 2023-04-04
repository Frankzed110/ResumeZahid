import Image from 'next/image'
import React from 'react'
import mainimage from '../../public/image.jpg'
import { TbCircleArrowRightFilled } from 'react-icons/tb';

export default function MainText() {
    return (
        <section className='flex'>
            <div className='p-5'>
                <h1 className='p-3 '> A Research Analyst and Customer Experience Professsional</h1>
                <p className='p-3 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae earum, velit, autem deleniti consectetur quas a animi totam laborum, omnis ad explicabo possimus vitae perferendis praesentium cum odio. Iure, sed.</p>
                <button className='group flex items-center py-2 px-3  rounded-lg bg-gradient-to-r from-teal-500 to-teal-200'>
                    Profile
                    <TbCircleArrowRightFilled size={20} className=' m-1 group-hover:rotate-90 duration-300' />
                </button>
            </div>
            <div className='p-7'>
                <Image src={mainimage} alt='my image' width={900} height={500} />
            </div>

        </section>
    )
}

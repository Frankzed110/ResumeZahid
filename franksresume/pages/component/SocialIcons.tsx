import Link from 'next/link'
import React from 'react'
import {FaLinkedin }from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import { GiCandleLight } from 'react-icons/gi'
export const SocialIcons = () => {
  return (
    <div>
<Link href={"https://www.linkedin.com/in/zahidhussain110"} target={"_blank"}><div className='ml-[-86px] hover:ml-0 duration-300 gap-2 flex text-lg justify-evenly fixed bg-gray-600 text-white w-36 top-[30vh] px-5 py-3 rounded-r-md'> Linkedin <FaLinkedin size={30}/></div> </Link>
<Link href={"https://github.com/Frankzed110"} target={"_blank"}><div className='ml-[-86px] hover:ml-0 duration-300 gap-2 flex text-lg justify-evenly fixed bg-gray-600 text-white w-36 top-[40vh] px-5 py-3 rounded-r-md'> Github <FaGithub size={23}/></div> </Link>
<Link href={"https://candlelightguide.com/"} target={"_blank"}><div className='ml-[-86px] hover:ml-0 duration-300 gap-2 flex text-lg justify-evenly fixed bg-gray-600 text-white w-36 top-[50vh] px-5 py-3 rounded-r-md'> Guide <GiCandleLight size={25}/></div> </Link>
</div>
  )
}

export default SocialIcons;



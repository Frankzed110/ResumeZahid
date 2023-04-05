import React from 'react'
import Header from './component/Header'
import MainText from './component/MainText'
import SocialIcons from './component/SocialIcons'

export default function Home() {
  return (
    <>
 
   <Header/>
   <SocialIcons/>
   <MainText/>
   
   </>
  )
}












// with normal link in google font it applies to css while with import it applies to tailwind.
// to add font, copy link from URL and add to styling then, add font family to Tsconfig and then call it in class name with elements
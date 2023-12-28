import React from 'react'
import logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <div className='px-10 pb-5 bg-black text-white py-5 gap-y-5'>
       <div className='flex items-center justify-center py-5' >
              <div>
    <img className=' rounded-md w-[100px] ' src={logo} alt="logo.png" />
              </div>
       </div>
 <div className='flex flex-wrap items-center py-5 gap-y-5 justify-between '>
       <div className='space-y-2 cur cursor-pointer' >
              <p>Neet Physics short</p>
              <p>HTML cheatsheet</p>
              <p>CSS cheatsheet</p>
              <p>Tailwind CSS cheatsheet</p>
              
       </div>
       <div className='space-y-2 cur cursor-pointer' >
              <p>Java Script-Pdf</p>
              <p>JQuery-Pdf</p>
              <p>Python chapter wise notes</p>
              <p>DSA notes</p>

       </div>
       <div className='space-y-2 cur cursor-pointer' >
              <p>Mongodb cheatsheet</p>
              <p>React Js</p>
              <p>API cheatsheet</p>
              <p>Express cheatsheet</p>
       </div>
   
       <div className='space-y-2 cur cursor-pointer' >
              <p>Git cheatsheet</p>
              <p>Js Dom All In One Pdf</p>
              <p>VS code Cheatsheet</p>
              <p>Chrome cheatsheet</p>
             
       </div>
   
 </div>
    </div>
  )
}

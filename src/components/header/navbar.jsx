import { useState } from 'react';
import { FiAlignLeft } from "react-icons/fi";
import logo from '../../assets/logo.png';



export default function Navbar() {
let Link = [
  {name:"Home" , link:"#Sliders"},
  {name:"Timing" , link:"#Time"},
  {name:"Contact" , link:"#contact"},
]

let [chnag,Setchange] = useState(false);

const handler = () =>{

  Setchange(!chnag)

}

  return (
    <div className=''>
           
      <div className='shadow-md w-full border border-yellow-200'>
        <div className='flex items-center justify-between bg-primary py-4 md:px-10 px-7 p-2' >
          <div className='font-bold text-2xl cursor-pointer gap-x-5 flex items-center text-white'>
            <a href="">
            <img src={logo} className=' w-16 text-orange-600 text-3xl  mr-1 pt-2'></img>
            </a>
          
          </div>
          <div className='text-3xl absolute text-white right-8 top-10 md:hidden cursor-pointer'>
            <FiAlignLeft onClick={handler}
            />
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute top-[120px] bg-primary border-2 md:border-none border-white md:static md:z-auto z-50 left-0 w-full  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${chnag ? 'scale-105 opacity-100':
          'top-[-400px]'} md:opacity-100 opacity-0 `}>
       {
        Link.map((values)=>(
          <li key={values.name} className='md:ml-8 md:my-0 my-5 text-xl text-white'>
            <a className='hover:text-primary duration-1000 ease-in-out' href={values.link}>{values.name}</a>
            </li>
        ))
      }
      <a href='https://web.telegram.org/k/#-2001035885' className='bg-white px-5 py-2 rounded-md font-semibold md:ml-10'>Book-Now</a>
          </ul>
        </div>
          <div className='overflow-hidden shadow-md  bg-white flex items-center h-[40px]'>
        <marquee className="text-3xl space-x-[500px]">
          <span className='text-blue-600'>Notes Hub co.in  Download This Nots and Join the Telegram Chanals  </span>
        </marquee>
      </div>
  
      </div>
      
           <div className='text-center space-y-3'>
            <div className='mt-3'>
            <a href='https://web.telegram.org/k/#@iPapkornBetaBot' className='text-red-800 text-center py-5 text-lg font-semibold' >Join the telegram Chanels For Downlod A Latest Notes For Notes Hub</a><br></br>
            </div>
<div className='flex  items-center justify-center text-xl font-semibold gap-x-5'>
            {/* <p className='rotate-90'> <TbHandFinger/> </p> */}
            <a href="https://web.telegram.org/k/#-2001035885" className='bg-red-800 text-white px-4 rounded-sm focus:bg-red-900  py-1' >Join Now</a>
            {/* <p className='-rotate-90 '> <TbHandFinger/></p> */}
</div>
           </div>
    </div>
  )
}


import React from 'react'
import Link from 'next/link'
import Sliderone from './Sliderone'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

function HeroSection() {
  return (
    <div className="p-4 mx-auto relative z-10 w-full pt-8 md:pt-12 px-2">
          <div className="text-6xl pb-5 md:text-7xl px-6 text-center font-semibold  text-[#39FF14]"
          >
            Web Design that <br />

             <TypeAnimation
  sequence={[
    'double leads.',
    1000,
    'drive sales.',
    1000,
    'double leads.',
    1000,
    'drive sales.',
    1000,
  ]}
  wrapper="span"
  speed={40}
  className=" inline-block font-extrabold"
  repeat={Infinity}
/> 
          </div>
          

        <p className="text-center  text-lg font-normal text-white max-w-3xl mx-auto px-4">
          Receive your design and website under 48 hours, with unlimited revisions through your dedicated client portal. All logos are handcrafted by coffee-fueled designers.
        </p>
        <div className='flex flex-row justify-center items-center gap-4 mt-1 '>
          {/* <div>   <Link href="https://wa.me/03114366363" className="flex items-center text-white font-bold hover:text-[#39FF14] justify-center px-6 py-2 mx-auto my-6 border-4 border-[#39FF14] rounded-lg cursor-pointer">

Book a Call

</Link></div>
          <div>
          <Link href="/book" className="flex items-center text-black font-bold  justify-center px-4 py-3 mx-auto my-6  bg-[#39FF14] hover:bg-[#37ff14cc] rounded-lg cursor-pointer">

Start a Project

</Link>
          </div> */}


          
      <button     className="inline-flex mt-10 items-center text-black  justify-center rounded-xl bg-[#39FF14] p-3.5 lg:p-4 lg:px-12 px-10  text-md lg:text-lg font-bold text-primary tracking-tight cta-btn cursor-pointer hover:scale-105 transition duration-300 ease-out w-full lg:w-auto"
      > 
        Book a Call
       </button> <br />

       </div>
     

           <div>
     


        </div>

        

      </div>

    
  )
}

export default HeroSection
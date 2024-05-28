import React from 'react'
import Link from 'next/link'
import Sliderone from './Sliderone'

function HeroSection() {
  return (
    <div className="p-4 mx-auto relative z-10 w-full pt-8 md:pt-12 px-2">
          <div className="text-4xl pb-5 md:text-7xl px-6 text-center font-semibold  text-[#39FF14]"
          >
            Great, Grow And <br /> Scale Your Bussiness
          </div>

        <p className="text-center  text-lg font-normal text-white max-w-3xl mx-auto px-4">
          Receive your design and website under 48 hours, with unlimited revisions through your dedicated client portal. All logos are handcrafted by coffee-fueled designers.
        </p>
        <div className='flex flex-row justify-center items-center gap-4 mt-1 '>
          <div>   <Link href="https://wa.me/03114366363" className="flex items-center text-white font-bold hover:text-[#39FF14] justify-center px-6 py-2 mx-auto my-6 border-4 border-[#39FF14] rounded-lg cursor-pointer">

Book a Call

</Link></div>
          <div>
          <Link href="/book" className="flex items-center text-black font-bold  justify-center px-4 py-3 mx-auto my-6  bg-[#39FF14] hover:bg-[#37ff14cc] rounded-lg cursor-pointer">

Start a Project

</Link>
          </div>
     


        </div>

        

      </div>

    
  )
}

export default HeroSection
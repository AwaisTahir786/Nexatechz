import { CardHoverEffectDemo } from '@/app/snippets/card-hover-snippet'
import React from 'react'

function Services() {
  return (
    <div className='max-w-7xl mx-auto '>

<div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-14 px-2">
        <div
          className="text-4xl md:text-4xl pb-5 font-bold px-6 text-center text-[#39FF14]"
        >
          Our services
        </div>

        {/* <p className="text-center mt-4 text-lg font-normal text-white max-w-xl mx-auto px-4">
         From website design to social media management, We offer a wide range of services to help you grow your business.
        </p> */}
      </div>
      <CardHoverEffectDemo/>
    </div>
  )
}

export default Services
"use client";

import React from 'react'
import {motion} from "framer-motion"
import { ThreeDCardDemo } from '@/app/snippets/3d-card-snippet';
import { EvervaultCardSnippet } from '@/app/snippets/evervault-card-snippet';

function GraphicDesign() {
  return (
    <div >
          <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div
          className="text-4xl pb-5 md:text-6xl px-6 text-center bg-clip-text text-[#39FF14]"
        >
Graphic Design          <br />
        </div>

        <p className="text-center mt-4 text-lg font-normal text-white max-w-lg mx-auto px-4">
         We create stunning visuals for your brand. From logos to social Media Posts, we&apos;ve got you covered.
        </p>
      </div>

      <div className='items-center md:flex justify-center md:mx-auto md:space-x-10'>
        <motion.div
            initial={{y:100, opacity:0}}
            animate={{y:0, opacity:1}}
            className="px-10 md:px-0"        
        >
            <ThreeDCardDemo/>
            
            
        </motion.div>

        <motion.div
            initial={{y:100, opacity:0}}
            animate={{y:0, opacity:1}}
            className="px-10 md:px-0"        
        >
            <EvervaultCardSnippet/>
            
            
        </motion.div>

      </div>
    </div>
  )
}

export default GraphicDesign;
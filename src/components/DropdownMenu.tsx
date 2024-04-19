
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link';


function DropdownMenu({onclose}:any) {
  return (
    <motion.div className=' h-screen w-screen bg-gradient-to-b from-neutral-50 to-neutral-400
     bg-opacity-50 text-slate-300 absolute p-6 space-y-4 top-28 left-0 right-0 z-50 rounded-t-3xl'
     

     initial={{opacity:0, y:"-80%"}}
     animate={{opacity:1, y:0}}
     exit={{opacity:0, y:"-100%"}}
     transition={{duration: 0.5}}
     
     >
    
    <div className='flex flex-col gap-4'>
        <Link href="/pricing" className="text-black text-2xl">Pricing</Link>
        <Link href="/contact" className="text-black text-2xl">Contact</Link>
        <Link href="/book" className="text-black text-2xl">Book a Call</Link>


    </div>
        
       


    </motion.div>
  )
}

export default DropdownMenu;
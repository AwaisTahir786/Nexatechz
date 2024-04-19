"use client";

import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { AlignJustify,X } from 'lucide-react';
import DropdownMenu from './DropdownMenu';


function Navbar({ScrollGraphicsDesign,ScrollToBrands,ScrollToShopifySTore,ScrollWebsiteDesign}:any) {

  const[isDropDrownVisible,setisDropDownVisible]=useState(false);

  function toggleDropDown() {
    setisDropDownVisible(!isDropDrownVisible)
    
  }

  function dropdownclose(){
    setisDropDownVisible(false)
  }
  return (
    <div className='p-6 md:p-10 flex flex-row justify-between z-50 text-white'>

       {/* image  */}
       <div>
        <Link href={"/"}>
            <Image 
            priority
            src="/logo/devcode.svg"
            alt='logo'
            width={100}
            height={100}
            className='w-10 h-10 md:h-14 md:w-14px'
            />
        </Link>
       </div>

        {/* navbar content */}
        <div className='cursor-pointer hidden md:flex space-x-10 items-center
         text-white bg-clip-text '>
  <div onClick={ScrollWebsiteDesign} className='hover:text-[#39FF14] '>Website Design</div>
  <div onClick={ScrollGraphicsDesign} className='hover:text-[#39FF14]'>Graphics Design</div>
  <div onClick={ScrollToShopifySTore} className='hover:text-[#39FF14]'>Shopify Stores</div>
  <div onClick={ScrollToBrands} className='hover:text-[#39FF14]'>Brands</div>
  <Link href={"/pricing"} className='hover:text-[#39FF14]'>Pricing</Link>
</div>


        {/* mobile Menu */}
        {isDropDrownVisible ? (
           <div className='h-8 w-8 text-slate-300 cursor-pointer md:hidden'
           onClick={toggleDropDown}>

       <X/>
       <DropdownMenu onclose={dropdownclose}/>

     </div>

        ):(
          <AlignJustify
           className='h-8 w-8 text-slate-300 cursor-pointer md:hidden' 
           onClick={toggleDropDown}/>
        )}
       
       <div className='hidden md:flex'>
       <Link href={"/contact"} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md  border-[#39FF14] border-2 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white hover:text-[#39FF14] transition-colors focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:ring-offset-2 focus:ring-offset-[#39FF14]">
        Contact
       </Link>

       </div>
      

  



    </div>
  )
}

export default Navbar;
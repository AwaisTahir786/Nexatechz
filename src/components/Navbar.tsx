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
    <div className=' p-6 md:p-0 flex flex-row justify-between z-50 text-white'>

       {/* image  */}
       <div className=''>
        <Link href={"/"}>
            <Image 
            priority
            src="/logo/logo.png"
            alt='logo'
            width={600}
            height={600}
            className='w-[180px] h-auto md:h-auto md:w-60 '
            />
        </Link>
       </div>

        {/* navbar content */}
        <div className='cursor-pointer hidden lg:flex space-x-10 md:mr-10 items-center
         text-white bg-clip-text '>
  <div onClick={ScrollWebsiteDesign} className='hover:text-[#39FF14] text-lg '>Website Design</div>
  <div onClick={ScrollGraphicsDesign} className='hover:text-[#39FF14] text-lg'>Graphics Design</div>
  <div onClick={ScrollToShopifySTore} className='hover:text-[#39FF14] text-lg'>Pricing</div>
  <div onClick={ScrollToBrands} className='hover:text-[#39FF14] text-lg'>Process</div>
  <Link href={"/pricing"} className='hover:text-[#39FF14] text-lg'>Pricing</Link>
</div>


        {/* mobile Menu */}
        {/* {isDropDrownVisible ? (
           <div className='h-8 w-8 text-slate-300 cursor-pointer md:hidden'
           onClick={toggleDropDown}>

       <X/>
       <DropdownMenu onclose={dropdownclose}/>

     </div>

        ):(
          <AlignJustify
           className='h-8 w-8 text-slate-300 cursor-pointer md:hidden' 
           onClick={toggleDropDown}/>
        )} */}
       
       <div className='hidden md:flex md:pr-8 md:pt-12'>
       <Link href={"https://wa.me/03114366363"} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md  border-[#39FF14] border-2 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white hover:text-[#39FF14] transition-colors focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:ring-offset-2 focus:ring-offset-[#39FF14]">
        Contact
       </Link>

       </div>
      

  



    </div>
  )
}

export default Navbar;
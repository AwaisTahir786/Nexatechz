"use client";

import React from 'react'
import Slider from 'react-slick'
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SliderOne() {
    return useMediaQuery({minWidth:768, maxWidth:1023})
}

function Slidertwo() {
    return useMediaQuery({maxWidth:767})
}


function Sliderone() {

    const isMediumScreen= SliderOne();
    const issmallScreen= Slidertwo();

    const settings={
        arrows : false,
        infinite: true,
        slidesToShow: 5,
        speed:6000,
        autoplay:true,
        autoplaySpeed:500,
        className:" cursor-pointer center-mode"
    }

    if(isMediumScreen){
        settings.slidesToShow=3;
    }
    if(issmallScreen){
        settings.slidesToShow=2;
    }

  return (
    <div className='mt-[-70px]'>
        <Slider {...settings}>
        <>
        <div className='rounded-sm '>
            <Image
            priority
            src="/1.png"
            alt='1image'
            width={350}
            height={350}
            className='rounded-2xl'
             />
        </div>
        </>

        
        <>
        <div className='rounded-sm '>
            <Image
            priority
            src="/2.png"
            alt='1image'
            width={350}
            height={350}
            className='rounded-2xl'
             />
        </div>
        </>

        <>
        <div className='rounded-sm'>
            <Image
            priority
            src="/3.png"
            alt='1image'
            width={350}
            height={350}
            className='rounded-2xl'
             />
        </div>
        </>
     

        <>
        <div className='rounded-sm '>
            <Image
            priority
            src="/4.png"
            alt='1image'
            width={350}
            height={350}
            className='rounded-2xl'
             />
        </div>
        </>

        <>
        <div className='rounded-sm'>
            <Image
            priority
            src="/5.png"
            alt='1image'
            width={350}
            height={350}
            className='rounded-2xl'
             />
        </div>
        </>

        
        <>
        <div className='rounded-sm '>
            <Image
            priority
            src="/6.png"
            alt='1image'
            width={350}
            height={350}
            className='rounded-2xl'
             />
        </div>
       
        </>

        <>
        <div className='rounded-sm '>
            <Image
            priority
            src="/7.png"
            alt='1image'
            width={350}
            height={350}
            className='rounded-2xl'
             />
        </div>
       
        </>
        <>
        <div className='rounded-sm '>
            <Image
            priority
            src="/8.png"
            alt='1image'
            width={350}
            height={350}
            className='rounded-2xl'
             />
        </div>
       
        </>
        <>
        <div className='rounded-sm '>
            <Image
            priority
            src="/9.png"
            alt='1image'
            width={350}
            height={350}
            className='rounded-2xl'
             />
        </div>
       
        </>
        <>
        <div className='rounded-sm '>
            <Image
            priority
            src="/10.png"
            alt='1image'
            width={350}
            height={350}
            className='rounded-2xl'
             />
        </div>
       
        </>
        <>
        <div className='rounded-sm '>
            <Image
            priority
            src="/11.png"
            alt='1image'
            width={350}
            height={350}
            className='rounded-2xl'
             />
        </div>
       
        </>
        <>
        <div className='rounded-sm '>
            <Image
            priority
            src="/12.png"
            alt='1image'
            width={350}
            height={350}
            className='rounded-2xl'
             />
        </div>
       
        </>
        
        </Slider>
        
    </div>
  )
}

export default Sliderone;
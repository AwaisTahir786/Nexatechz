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
        speed:8000,
        autoplay:true,
        autoplaySpeed:1000,
        className:"w-full mx-auto cursor-pointer center-mode"
    }

    if(isMediumScreen){
        settings.slidesToShow=3;
    }
    if(issmallScreen){
        settings.slidesToShow=2;
    }

  return (
    <div className='mt-[-43px]'>
        <Slider {...settings}>
        <>
        <div className='rounded-sm p-3'>
            <Image
            priority
            src="/woodd.jpg"
            alt='1image'
            width={300}
            height={300}
            className='rounded-2xl'
             />
        </div>
        </>

        
        <>
        <div className='rounded-sm p-3'>
            <Image
            priority
            src="/woodd.jpg"
            alt='1image'
            width={300}
            height={300}
            className='rounded-2xl'
             />
        </div>
        </>

        <>
        <div className='rounded-sm p-3'>
            <Image
            priority
            src="/woodd.jpg"
            alt='1image'
            width={300}
            height={300}
            className='rounded-2xl'
             />
        </div>
        </>
     

        <>
        <div className='rounded-sm p-3'>
            <Image
            priority
            src="/woodd.jpg"
            alt='1image'
            width={300}
            height={300}
            className='rounded-2xl'
             />
        </div>
        </>

        <>
        <div className='rounded-sm p-3'>
            <Image
            priority
            src="/woodd.jpg"
            alt='1image'
            width={300}
            height={300}
            className='rounded-2xl'
             />
        </div>
        </>

        
        <>
        <div className='rounded-sm p-3'>
            <Image
            priority
            src="/woodd.jpg"
            alt='1image'
            width={300}
            height={300}
            className='rounded-2xl'
             />
        </div>
        </>
        </Slider>
        
    </div>
  )
}

export default Sliderone;
"use client";

import Navbar from '@/components/Navbar';
import React from 'react'
import { InlineWidget } from "react-calendly";


function Book() {
  return (
    <>
     <section className=" flex flex-col w-full h-screen  bg-black bg-grid-white/[0.02]  ">
      <Navbar />
      <div className="text-4xl pb-5 md:text-6xl text-center 
        text-[#39FF14] ">
          Book a meeting
        </div>

        <InlineWidget url="https://calendly.com/tahirawais111/meeting" />



       


    </section></>
   
  )
}

export default Book;
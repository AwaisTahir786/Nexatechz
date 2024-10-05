"use client";

import { useState } from "react";

import Link from "next/link";

import { PiCheckCircleFill } from "react-icons/pi";

import Navbar from "@/components/Navbar";

const plans = [
  {
    index: 0,
    name: "Basic",
    price: " US $499",
    features: [
      "Fully responsive on all screens",

      "Design + Development",

      "Private communication channel",
      "1-3 days turnaround time",
    ],
    style:
      " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Standalone components  integrated. ",
    button: "Buy Now",
  },
  {
    index: 1,
    name: "Premium",
    price: "US $1299",
    features: [
      "Fully responsive on all screens",
      "React / Next.js / Tailwind CSS code",
      "Design + Development",
      "24-hour support response time",
      "Private communication channel",
      "3-5 days turnaround time",
    ],
    style:
      " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
    "Standalone components  integrated. ",
    button: "Buy Now",
  },
  {
    index: 2,
    name: "Enterprise",
    feature: "Contact Us",
    price: "Let's Talk!",
    features: [
      "Fully responsive on all screens",
      "React / Next.js / Tailwind CSS code",
      "Design + Development",
      "Unlimited Revisions",
      "24-hour support response time",
      "Private communication channel",
      // "Priority Development Queue",
      // "Dedicated Project Manager",
    ],
    style:
      " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
    description:
    "Standalone components  integrated. ",
    button: "Contact Us",
  },
];

const Pricing = () => {
  return (
    <div className="w-full mt-6 md:items-center md:justify-center
     bg-black/[0.96] antialiased 
     bg-grid-white/[0.02] relative overflow-hidden">

      

      <div className="flex items-center justify-center flex-col">
        <div className="text-3xl md:text-4xl font-bold pb-10 md:pb-16 text-[#39FF14] px-6 text-center bg-clip-text  bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50">
          Simple Pricing  For Logo Designing
        </div>
        <div className="grid grid-cols-1 mt-6  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:w-4/5 cursor-pointer pb-6  items-start ">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="h-[32em] flex flex-col justify-between  border-2 rounded-3xl px-6  "
            >
              <div className={plan.style}>
                <div className="text-2xl flex text-[#39FF14] items-center font-bold">
                  {plan.name}
                  {/* render feature tag only for enterprise tab*/}
                  {plan.feature === "Contact Us" && (
                    <div className="text-sm font-medium text-blue-600 bg-white px-2 py-2 rounded-full ml-4 items-center ">
                      Contact Us
                    </div>
                  )}
                </div>
                <div className="text-2xl pt-2 ">{plan.price}</div>
                <div className="pt-2 pb-6">{plan.description}</div>

                <ul>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-md  py-1 flex space-x-2 items-center"
                    >
                      {/* render checkmark only for enterprise tab*/}
                      {plan.feature === "Contact Us" ? (
                        <PiCheckCircleFill className="text-[#39FF14] mr-2 text-xl" />
                      ) : (
                        <PiCheckCircleFill className="text-[#39FF14] mr-2 text-xl" />
                      )}

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* button  */}
              <Link href={"/contact"}>
                <div
                  className="w-full my-4 py-2 mx-auto rounded-3xl text-black font-semibold text-lg bg-gradient-to-r bg-[#39FF14] flex justify-center items-center">
                  {plan.button}
                </div>
              </Link>
              
              {/* 
                <div className={plan.button}>
                  {index === 0 && (
                    <Link
                      href="https://buy.stripe.com/6oEg1WdsibFr1EYbIK"
                      className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
                    >
                      Buy Now
                    </Link>
                  )}
                    {index === 1 && (
                      <Link
                        
                        href="https://buy.stripe.com/14k2b65ZQ8tf5Ve28c"  
                        className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300" 
                      >
                        Buy Now
                        </Link>
                    )}
                    {index === 2 && (

                          <Link
                          href="/contact"
                          className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-blue-300"
                        >
                          Contact Us
                        </Link>
                    )}  
                </div> */}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
};

export default Pricing;








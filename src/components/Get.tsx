/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FaPen } from "react-icons/fa";


const Get = () => {
    return (
        <section className='p-10 mb-20 md:mx-32 mt-20 bg-[#39FF14] border-2 border-[#39FF14] rounded-xl'>
            <div className=' py-10 ' >
                <div className='text-white flex flex-col justify-center items-center'>
                    <div className='text-black font-bold text-2xl mb-4 border-2 border-black rounded-full p-2 bg-[#37ff14]'>Delivery</div>
                    <h2 className='text-black font-bold text-4xl mb-8'>What you can expect for us?</h2>


                    {/* list div  */}
                    <div className=' flex flex-col gap-6'>

                        {/* first list */}

                        <ul className='flex lg:flex-row flex-col gap-10'>



                            <li className="flex   items-center text-[#39FF14] font-bold  justify-center px-6 py-2  bg-black  rounded-full  cursor-pointer">

                                <div className='p-1 border-2 border-[#39FF14] bg-black  rounded-full'>
                                    <FaPen className='text-[12px] text-[#39FF14] ' />

                                </div>
                                <div className='text-sm ml-2'>
                                    All essential file formats

                                </div>

                            </li>



                            <li className="flex   items-center text-[#39FF14] font-bold  justify-center px-6 py-1  bg-black  rounded-full  cursor-pointer">

                                <div className='p-1 border-2 border-[#39FF14] bg-black  rounded-full'>
                                    <FaPen className='text-[12px] text-[#39FF14] ' />

                                </div>
                                <div className='text-sm ml-2'>
                                Satisfaction guarantee

                                </div>

                            </li>


                            <li className="flex   items-center text-[#39FF14] font-bold  justify-center px-6 py-1  bg-black  rounded-full  cursor-pointer">

                                <div className='p-1 border-2 border-[#39FF14] bg-black  rounded-full'>
                                    <FaPen className='text-[12px] text-[#39FF14] ' />

                                </div>
                                <div className='text-sm ml-2'>
                                Unlimited revisions

                                </div>

                            </li>
                        </ul>



                        {/* 2nd list  */}

                        <ul className='flex lg:flex-row flex-col gap-10 md:ml-10'>
                           <li className="flex  pt-2 pb-2 items-center text-[#39FF14] font-bold  justify-center px-6 py-1  bg-black  rounded-full  cursor-pointer">

                                <div className='p-1 border-2 border-[#39FF14] bg-black  rounded-full'>
                                    <FaPen className='text-[12px] text-[#39FF14] ' />

                                </div>
                                <div className='text-sm ml-2'>
                                Unlimited revisions

                                </div>

                            </li>

                            <li className="flex   items-center text-[#39FF14] font-bold  justify-center px-6 py-1  bg-black rounded-full  cursor-pointer">

                                <div className='p-1 border-2 border-[#39FF14] bg-black  rounded-full'>
                                    <FaPen className='text-[12px] text-[#39FF14] ' />

                                </div>
                                <div className='text-sm ml-2'>
                                    Seo optimized Websites

                                </div>

                            </li>

                            <li className="flex   items-center text-[#39FF14] font-bold  justify-center px-6 py-1  bg-black rounded-full  cursor-pointer">

                                <div className='p-1 border-2 border-[#39FF14] bg-black  rounded-full'>
                                    <FaPen className='text-[12px] text-[#39FF14] ' />

                                </div>
                                <div className='text-sm ml-2'>
                                Mockups

                                </div>

                            </li>
                        </ul>



                    </div>

                </div>
            </div>



        </section>

    )
}

export default Get;

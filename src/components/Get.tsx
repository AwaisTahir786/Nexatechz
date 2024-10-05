/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FaPen } from 'react-icons/fa';

const Get = () => {
    return (
        <section className='p-8 mb-12 md:mb-16 md:mx-32 mt-24 bg-[#39FF14] border-2 border-[#39FF14] rounded-xl'>
            <div className='py-8'>
                <div className='text-white flex flex-col justify-center items-center'>
                    <div className='text-black font-bold text-xl mb-4 border-2 border-black rounded-full p-3 bg-[#37ff14]'>
                        Delivery
                    </div>
                    <h2 className='text-black font-bold text-3xl mb-6 text-center'>
                        What you can expect from us?
                    </h2>

                    {/* List Container */}
                    <div className='flex flex-col gap-8'>

                        {/* First Row */}
                        <ul className='flex flex-col lg:flex-row gap-8 justify-center'>
                            <li className="flex items-center text-[#39FF14] font-bold justify-center px-4 py-2 bg-black rounded-full cursor-pointer">
                                <div className='p-1 border-2 border-[#39FF14] bg-black rounded-full'>
                                    <FaPen className='text-[10px] text-[#39FF14]' />
                                </div>
                                <div className='text-xs ml-2'>
                                    All essential file formats
                                </div>
                            </li>

                            <li className="flex items-center text-[#39FF14] font-bold justify-center px-4 py-2 bg-black rounded-full cursor-pointer">
                                <div className='p-1 border-2 border-[#39FF14] bg-black rounded-full'>
                                    <FaPen className='text-[10px] text-[#39FF14]' />
                                </div>
                                <div className='text-xs ml-2'>
                                    Satisfaction guarantee
                                </div>
                            </li>

                            <li className="flex items-center text-[#39FF14] font-bold justify-center px-4 py-2 bg-black rounded-full cursor-pointer">
                                <div className='p-1 border-2 border-[#39FF14] bg-black rounded-full'>
                                    <FaPen className='text-[10px] text-[#39FF14]' />
                                </div>
                                <div className='text-xs ml-2'>
                                    Unlimited revisions
                                </div>
                            </li>
                        </ul>

                        {/* Second Row */}
                        <ul className='flex flex-col lg:flex-row gap-8 justify-center'>
                            <li className="flex items-center text-[#39FF14] font-bold justify-center px-4 py-2 bg-black rounded-full cursor-pointer">
                                <div className='p-1 border-2 border-[#39FF14] bg-black rounded-full'>
                                    <FaPen className='text-[10px] text-[#39FF14]' />
                                </div>
                                <div className='text-xs ml-2'>
                                    Seo optimized Websites
                                </div>
                            </li>

                            <li className="flex items-center text-[#39FF14] font-bold justify-center px-4 py-2 bg-black rounded-full cursor-pointer">
                                <div className='p-1 border-2 border-[#39FF14] bg-black rounded-full'>
                                    <FaPen className='text-[10px] text-[#39FF14]' />
                                </div>
                                <div className='text-xs ml-2'>
                                    Mockups
                                </div>
                            </li>

                            <li className="flex items-center text-[#39FF14] font-bold justify-center px-4 py-2 bg-black rounded-full cursor-pointer">
                                <div className='p-1 border-2 border-[#39FF14] bg-black rounded-full'>
                                    <FaPen className='text-[10px] text-[#39FF14]' />
                                </div>
                                <div className='text-xs ml-2'>
                                    Unlimited revisions
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Get;

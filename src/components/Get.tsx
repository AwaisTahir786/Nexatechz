/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from 'react';
import { FaPen } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Get: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const listItemsRef = useRef<(HTMLLIElement | null)[]>([]); // Refs for the list items
    const headingRef = useRef<HTMLHeadingElement | null>(null); // Ref for the heading
    const deliveryRef = useRef<HTMLDivElement | null>(null); // Ref for the delivery box

    useEffect(() => {
        const section = sectionRef.current;
        const listItems = listItemsRef.current;
        const heading = headingRef.current;
        const delivery = deliveryRef.current;

        if (section && listItems.length > 0) {
            // GSAP animation for the heading
            gsap.fromTo(
                heading,
                { opacity: 0, y: -50 }, // Starting position (above and invisible)
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%', // Animation starts when section hits 80% of the viewport
                    },
                }
            );

            // GSAP animation for delivery box
            gsap.fromTo(
                delivery,
                { opacity: 0, scale: 0.5 }, // Starting from a smaller scale
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%', // Animation starts when section hits 70% of the viewport
                    },
                }
            );

            // GSAP animation for list items with stagger effect
            gsap.fromTo(
                listItems,
                { opacity: 0, y: 50 }, // Starting position (below and invisible)
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    stagger: 0.2, // Delay between each item animation
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%', // Animation starts when section hits 70% of the viewport
                    },
                }
            );
        }
    }, []);

    return (
        <section ref={sectionRef} className='p-8 mb-12 md:mb-16 md:mx-32 mt-24 bg-[#39FF14] border-2 border-[#39FF14] rounded-xl'>
            <div className='py-8'>
                <div className='text-white flex flex-col justify-center items-center'>
                    {/* Delivery box with scroll animation */}
                    <div ref={deliveryRef} className='text-black font-bold text-xl mb-4 border-2 border-black rounded-full p-3 bg-[#37ff14]'>
                        Delivery
                    </div>
                    <h2 ref={headingRef} className='text-black font-bold text-3xl mb-6 text-center'>
                        What you can expect from us?
                    </h2>

                    {/* List Container */}
                    <div className='flex flex-col gap-8'>
                        {/* First Row */}
                        <ul className='flex flex-col lg:flex-row gap-8 justify-center'>
                            <li ref={(el) => (listItemsRef.current[0] = el)} className="flex items-center text-[#39FF14] font-bold justify-center px-4 py-2 bg-black rounded-full cursor-pointer">
                                <div className='p-1 border-2 border-[#39FF14] bg-black rounded-full'>
                                    <FaPen className='text-[10px] text-[#39FF14]' />
                                </div>
                                <div className='text-xs ml-2'>All essential file formats</div>
                            </li>

                            <li ref={(el) => (listItemsRef.current[1] = el)} className="flex items-center text-[#39FF14] font-bold justify-center px-4 py-2 bg-black rounded-full cursor-pointer">
                                <div className='p-1 border-2 border-[#39FF14] bg-black rounded-full'>
                                    <FaPen className='text-[10px] text-[#39FF14]' />
                                </div>
                                <div className='text-xs ml-2'>Satisfaction guarantee</div>
                            </li>

                            <li ref={(el) => (listItemsRef.current[2] = el)} className="flex items-center text-[#39FF14] font-bold justify-center px-4 py-2 bg-black rounded-full cursor-pointer">
                                <div className='p-1 border-2 border-[#39FF14] bg-black rounded-full'>
                                    <FaPen className='text-[10px] text-[#39FF14]' />
                                </div>
                                <div className='text-xs ml-2'>Unlimited revisions</div>
                            </li>
                        </ul>

                        {/* Second Row */}
                        <ul className='flex flex-col lg:flex-row gap-8 justify-center'>
                            <li ref={(el) => (listItemsRef.current[3] = el)} className="flex items-center text-[#39FF14] font-bold justify-center px-4 py-2 bg-black rounded-full cursor-pointer">
                                <div className='p-1 border-2 border-[#39FF14] bg-black rounded-full'>
                                    <FaPen className='text-[10px] text-[#39FF14]' />
                                </div>
                                <div className='text-xs ml-2'>Seo optimized Websites</div>
                            </li>

                            <li ref={(el) => (listItemsRef.current[4] = el)} className="flex items-center text-[#39FF14] font-bold justify-center px-4 py-2 bg-black rounded-full cursor-pointer">
                                <div className='p-1 border-2 border-[#39FF14] bg-black rounded-full'>
                                    <FaPen className='text-[10px] text-[#39FF14]' />
                                </div>
                                <div className='text-xs ml-2'>Mockups</div>
                            </li>

                            <li ref={(el) => (listItemsRef.current[5] = el)} className="flex items-center text-[#39FF14] font-bold justify-center px-4 py-2 bg-black rounded-full cursor-pointer">
                                <div className='p-1 border-2 border-[#39FF14] bg-black rounded-full'>
                                    <FaPen className='text-[10px] text-[#39FF14]' />
                                </div>
                                <div className='text-xs ml-2'>Unlimited revisions</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Get;

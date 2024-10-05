import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Easysteps: React.FC = () => {
    // Refs for the section and cards
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]); // Array of div refs

    useEffect(() => {
        const section = sectionRef.current;
        const cards = cardRefs.current;

        if (section && cards.length > 0) {
            // GSAP animation for cards
            gsap.fromTo(
                cards,
                { opacity: 0, y: 50 }, // Starting state
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.3, // Stagger animation of each card
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%', // Trigger when top of section hits 80% of the viewport
                        toggleActions: 'play none none reverse', // Play when in view, reverse when out of view
                    },
                }
            );
        }
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-black md:mt-14 p-4">
            {/* Section title */}
            <div className="text-3xl font-bold md:text-4xl px-6 md:pb-2 mt-8 md:mt-0 text-center bg-clip-text text-[#39FF14]">
                A professional Logo and Website in three easy steps 
            </div>

            {/* Cards with GSAP scroll-triggered animations */}
            <div className="bg-black relative block px-6 py-8 md:px-14 md:pt-8">
                <div className="relative mx-auto max-w-6xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card 1 */}
                    <div
                        ref={(el) => (cardRefs.current[0] = el)}
                        className="rounded-md border border-black bg-neutral-900/50 p-8 text-center shadow"
                    >
                        <div className="bg-[#39FF14] border-[#39FF14] mx-auto flex h-12 w-14 items-center justify-center rounded-md border">
                            <Image
                                priority
                                src="/buy.png"
                                alt="Customizable Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <h3 className="mt-6 text-white">Customizable 🛠️</h3>
                        <p className="my-4 mb-0 text-white leading-relaxed">
                            Tailor your landing pages look and feel, from the color scheme to the font size, to the design of the page.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div
                        ref={(el) => (cardRefs.current[1] = el)}
                        className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow"
                    >
                        <div className="bg-[#39FF14] border-[#39FF14] mx-auto flex h-12 w-14 items-center justify-center rounded-md border">
                            <Image
                                priority
                                src="/doc.png"
                                alt="Fast Performance Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <h3 className="mt-6 text-white">Fast Performance ⚡</h3>
                        <p className="my-4 mb-0 text-white leading-relaxed">
                            We build our templates for speed in mind, for super-fast load times so your customers never waver.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div
                        ref={(el) => (cardRefs.current[2] = el)}
                        className="rounded-md border bg-[#39FF14] border-black p-8 text-center shadow"
                    >
                        <div className="bg-[#39FF14] border-black mx-auto flex h-12 w-14 items-center justify-center rounded-md border-2">
                            <Image
                                priority
                                src="/com.png"
                                alt="Fully Featured Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <h3 className="mt-6 text-black">Fully Featured </h3>
                        <p className="my-4 mb-0 text-black leading-relaxed">
                            Everything you need to succeed and launch your landing page, right out of the box.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Easysteps;

import React from 'react';
import Image from 'next/image';

const Easysteps = () => {
    return (
        <section className="h-full min-h-screen w-full bg-black md:mt-14 p-4">
<div
                className="text-4xl font-bold md:text-4xl px-6 pb-2 text-center bg-clip-text text-[#39FF14] "
            >
                A professional Logo and Website in
                three easy steps

            </div>

            <div className="bg-black relative block px-6 py-8 md:py-0 md:px-14 md:pt-8">

                <div className="relative mx-auto max-w-6xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-md border border-black bg-neutral-900/50 p-8 text-center shadow">
                        <div className="button-text bg-[#39FF14] border-[#39FF14] mx-auto flex h-12 w-14 p-2 items-center justify-center rounded-md border background-image: linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%);  "
                        >

                            <Image
                                priority
                                src="/buy.png"
                                alt='1image'
                                width={300}
                                height={300}
                                className=''
                            />
                        </div>
                        <h3 className="mt-6 text-white">Customizable</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white">Tailor your landing pages
                            look
                            and feel, from the color scheme to the font size, to the design of the page.
                        </p>
                    </div>


                    <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                        <div className="button-text bg-[#39FF14] border-[#39FF14] mx-auto flex h-12 w-14 p-2 items-center justify-center rounded-md border background-image: linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%);  "
                        >

                            <Image
                                priority
                                src="/doc.png"
                                alt='1image'
                                width={300}
                                height={300}
                                className=''
                            />
                        </div>
                        <h3 className="mt-6 text-white">Fast Performance</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white">We build our templates for
                            speed in mind, for super-fast load times so your customers never waver.
                        </p>
                    </div>


                    <div className="rounded-md border bg-[#39FF14] border-black p-8 text-center shadow">
                        <div className="button-text bg-[#39FF14] border-black mx-auto flex h-12 w-14 p-2 items-center justify-center rounded-md border-2 background-image: linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%);  "
                        >

                            <Image
                                priority
                                src="/com.png"
                                alt='1image'
                                width={300}
                                height={300}
                                className=''
                            />
                        </div>
                        <h3 className="mt-6 text-black">Fully Featured</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-black">
                            Everything you need to
                            succeed
                            and launch your landing page, right out of the box. No need to install anything else.
                        </p>
                    </div>


                </div>

            </div>
        </section>
    );
};

export default Easysteps;

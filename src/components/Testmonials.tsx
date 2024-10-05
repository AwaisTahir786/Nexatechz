/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'

function Test() {
  return (
    
<section className="bg-black  md:mt-[-33px]">
  <div className="mx-auto   ">
  <div className='text-3xl md:mb-14 font-bold pb-10 md:pb-4 text-[#39FF14] md:text-4xl text-center bg-clip-text '>
                Testmonials<br/>
            </div>
      {/* <div className="mx-auto max-w-screen-lg text-lg text-center mb-8 lg:mb-16">
          <h2 className="  text-white ">We have worked with thousands of amazing peoples</h2>
      </div>  */}

      <div className=" mx-auto mb-10 ">
        <div className="grid gap-6 max-w-screen md:px-40 lg:grid-cols-2 xl:grid-cols-3">

            {/* kluj+ */}
            <div className="flex flex-col border-2 border-[#39FF14] justify-between w-full h-full	 px-6 py-6 bg-black md:px-6 rounded-2xl md:py-10   dark:bg-trueGray-800">
                    <p className="text-[18px] text-white ">"Hira is an Exceptional Graphic Designer! The Brand Style Guides she did for us were Magnificent! I would recommend her 100%."</p>
                    <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                            <Image alt="Avatar" src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100&amp;h=100" loading="lazy" height={100} width={100}/>
                        </div>
                        <div>
                            <div className="text-[14px] text-white font-medium">Alanna Brooke</div>
                        </div>
                    </div>
                </div>
            <div className="flex flex-col justify-between w-full border-2 border-[#39FF14] h-full	 px-6 py-6 bg-black md:px-10 rounded-2xl md:py-10   dark:bg-trueGray-800">
                    <p className="text-[18px] leading-normal text-white ">
                    "Awais provide a very professional and fast work, can do anything you ask for, Highly recommended fast work will work with him again!"
                    </p>
                    <div className="flex items-center mt-8 space-x-3">
                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                            <Image alt="Avatar" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80" loading="lazy" height={100} width={100} />
                        </div>
                        <div>
                            <div className="text-[14px] text-white font-medium">Toshit Garg</div>
                        </div>
                    </div>
                </div>
            <div className="flex flex-col justify-between border-2 border-[#39FF14] w-full h-full	 px-6 py-6 bg-black md:px-10 rounded-2xl md:py-10   dark:bg-trueGray-800">
                    <p className="text-xl leading-normal text-white">
                    Great experience working with Awais, he completes the requirements properly and very fast work will work with him again"                        </p>
                    <div className="flex items-center mt-8 space-x-3">
                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                            <Image alt="Avatar" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;crop=faces&amp;q=80" loading="lazy" height={100} width={100} />
                        </div>
                        <div>
                            <div className="text-[14px] text-white font-medium">Lovely Bernal</div>
                        </div>
                    </div>
                </div>

                {/* Ad more */}
                <div className="flex flex-col border-2 border-[#39FF14] justify-between w-full h-full	 px-6 py-6 bg-black md:px-6 rounded-2xl md:py-10   dark:bg-trueGray-800">
                    <p className="text-[18px] text-white ">
                    "Hira was an absolute pleasure to work with. Her attention to detail was exceptional, ensuring that every aspect of our project received the care it deserved.  
                        </p>
                    <div className="flex items-center mt-8  space-x-3">
                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                            <Image alt="Avatar" src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100&amp;h=100" loading="lazy" height={100} width={100}/>
                        </div>
                        <div>
                            <div className="text-[14px] text-white font-medium">Sanam Malik</div>
                        </div>
                    </div>
                </div>
            <div className="flex flex-col justify-between w-full border-2 border-[#39FF14] h-full	 px-6 py-6 bg-black md:px-10 rounded-2xl md:py-10   dark:bg-trueGray-800">
                    <p className="text-[18px] leading-normal text-white ">
                    "I really liked the logo Hira designed for me. Hira is extremely creative and hardworking. She understood my requirements and came up with the logo in no time.                        </p>
                    <div className="flex items-center mt-8 space-x-3">
                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                            <Image alt="Avatar" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80" loading="lazy" height={100} width={100} />
                        </div>
                        <div>
                            <div className="text-[14px] text-white font-medium">Patrick Floeter</div>
                        </div>
                    </div>
                </div>
            <div className="flex flex-col justify-between border-2 border-[#39FF14] w-full h-full	 px-6 py-6 bg-black md:px-10 rounded-2xl md:py-10   dark:bg-trueGray-800">
                    <p className="text-xl leading-normal text-white">
                    "Hira was flexible, went the extra mile, and ensured my complete satisfaction with my new logo. Knowing your vision as an owner helps her translate it better into stunning visuals.                         </p>
                    <div className="flex items-center mt-8 space-x-3">
                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                            <Image alt="Avatar" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;crop=faces&amp;q=80" loading="lazy" height={100} width={100} />
                        </div>
                        <div>
                            <div className="text-[14px] text-white font-medium">Thomas Castellanos</div>
                        </div>
                    </div>
                </div>

{/*         
            <div className="">
            <div className="flex flex-col justify-between border-2 border-[#39FF14] w-full h-full	 px-6 py-6 bg-black md:px-10 rounded-2xl md:py-10   dark:bg-trueGray-800">
                    <p className="text-xl leading-normal text-white">Share a<span className="mx-1 text-white font-extrabold">testimonial</span>that hits some of your benefits from one of your popular customer.</p>
                    <div className="flex items-center mt-8 space-x-3">
                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                            <Image alt="Avatar" src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100&amp;h=100" loading="lazy" height={100} width={100} />
                        </div>
                        <div>
                            <div className="text-[14px] text-white font-medium">Sarah Steiner</div>
                            <div className="text-white text-[10px]">VP Sales at Google</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
            <div className="flex flex-col justify-between border-2 border-[#39FF14] w-full h-full	 px-6 py-6 bg-black md:px-10 rounded-2xl md:py-10   dark:bg-trueGray-800">
                    <p className="text-xl leading-normal text-white">Make sure you only pick the <span className="mx-1 text-white font-extrabold">right sentence</span> to keep it short and simple.</p>
                    <div className="flex items-center mt-8 space-x-3">
                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                            <Image alt="Avatar" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80" loading="lazy" height={100} width={100} />
                        </div>
                        <div>
                            <div className="text-[14px] text-white font-medium">Dylan Ambrose</div>
                            <div className="text-white text-[10px]">Lead marketer at Netflix </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
            <div className="flex flex-col justify-between w-full border-2 border-[#39FF14] h-full	 px-6 py-6 bg-black md:px-10 rounded-2xl md:py-10   dark:bg-trueGray-800">
                    <p className="text-xl leading-normal text-white">This is an <span className="mx-1 text-white font-extrabold">awesome</span> landing page template I&#x27;ve seen. I would use this for anything.</p>
                    <div className="flex items-center mt-8 space-x-3">
                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                            <Image alt="Avatar" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;crop=faces&amp;q=80" loading="lazy" height={100} width={100} />
                        </div>
                        <div>
                            <div className="text-[14px] text-white font-bold">Gabrielle Winn</div>
                            <div className="text-white text-[10px]">Co-founder of Acme Inc</div>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    </div>

  
  </div>
</section> )
}

export default Test
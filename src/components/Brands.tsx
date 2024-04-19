import React from "react";
import { Lora } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";

const font = Lora({ subsets: ["latin"], weight: ["400"] });

const logos = [
  // {
  //   image: "/logo/stripelogo.png",
  // },
  {
    image: "/logo/logoipsum-225.svg",
  },
  // {
  //   image: "/logo/logoipsum-245.svg",
  // },
  // {
  //   image: "/logo/logoipsum-247.svg",
  // },
  {
    image: "/logo/logoipsum-248.svg",
  },
  {
    image: "/logo/logoipsum-249.svg",
  },
];

function Brands() {
  return (
    <div>
      {" "}
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div
          className="text-4xl pb-5 md:text-6xl px-6 text-center bg-clip-text text-[#39FF14]"
        >
          The best brands
          <br /> choose us
        </div>

        <p className="text-center mt-4 text-lg font-normal text-white max-w-lg mx-auto px-4">
          From small business to large corporations, we have helped many brands
          elevate their bussiness.
        </p>

        <div className="grid grid-cols-3 items-center justify-center mx-auto md:w-3/5 cursor-pointer">
            {logos.map((data,index)=>{
                return(
                    <div key={index} className="p-4 md:p-20 ">
                        <Image
                        src={data.image}
                        alt="logo"
                        width={80}
                        height={80}
                        priority
                        className="w-50 h-auto max-w-full rounded-lg"

                        />


                    </div>
                )
            })}

        </div>

        <div className={cn(
            "flex items-center justify-center text-center text-white text-xl xl:text-2xl pt-10 md:pt-0 pb-4 px-8",font.className
        )}>
            &quot;We got ride of nearly a dozen different tools because of what bird does for us.&quot;

        </div>

        <div className="flex justify-center items-center flex-col text-white">
            <Image
            src="/logo/devcode.svg"
            alt="logo"
            width={100}
            height={100}
            className="pt-2 xl:pt-0 w-14 xl:w-20"
            
            />

            <div className="text-center">
                <div className="text-sm font-medium pt-4">Awais Tahir</div>
                <div className="text-sm">Chief executive officer, DevCode</div>

            </div>

        </div>


      </div>
    </div>
  );
}

export default Brands;

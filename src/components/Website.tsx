import React from "react";
import Image from "next/image";

function Website() {
  return (
    <div  >
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div
          className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-[#39FF14] "
        >
          Website Design
        
        </div>

        <p className="text-center mt-4 text-lg font-normal text-white max-w-lg mx-auto px-4">
         Creating, designing and developing websites that work for your bussiness.
        </p>
      </div>
      {/* g */}
      <div>
        

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 ">
    <div className="grid gap-4">
        <div>
            <Image priority width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
        </div>

        <div>
            <Image priority width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
        </div>

        <div>
            <Image priority width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
        </div>
        </div>

        <div className="grid gap-4">
        <div>
            <Image priority width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
        </div>

        <div>
            <Image priority width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
        </div>
        <div>
            <Image priority width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
        </div>
            
        </div>


        <div className="grid gap-4">
        <div>
            <Image priority width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
        </div>

        <div>
            <Image priority width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
        </div>
        <div>
            <Image priority width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"alt=""/>
        </div>
            
        </div>




        <div className="grid gap-4">
        <div>
            <Image priority width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
        </div>

        <div>
            <Image priority width={500} height={500} className="h-auto max-w-full rounded-lg"  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
        </div>
        <div>
            <Image priority width={500} height={500} className="h-auto max-w-full rounded-lg"  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"alt=""/>
        </div>
            
        </div>

       




       
   
   
</div>

      </div>


     
    </div>
  );
}

export default Website;

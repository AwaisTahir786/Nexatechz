import React from 'react'
import Image from 'next/image'

const store=[
    {
        image:"/image2.png",
        quote:"Bird Shows us to get started, what to do, how to do it.",
        name:"Jason Scre"
    },
    {
        image:"/shop-2.jpeg",
        quote:"We had no idea how to get started, but bird showed us the way. to get started, what to do, how to do it.",
        name:"Jhon Prency"
    },
    {
        image:"/s-2.webp",
        quote:"The team at bird is amazing. They help us to create a stunning store.",
        name:"Miguel Martinez"
    },
]

function ShopifyStore() {
  return (
    <section className='w-full mt-10 bg-[#f6f5f4] md:py-10 rounded-3xl' >
        <div className='p-4 mx-auto z-10 w-full relative'>
            <div className='text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-black'>
                Shopify store <br/>
            </div>
            <p className='mt-4 text-lg font-normal text-neutral-800 max-w-lg text-center mx-auto'>
                We create stunning shopify stores that are designed to convert.
            </p>
            <div className='md:flex justify-center items-center px-10'>
                {store.map((data,index)=>{
                    return(
                    <div key={index} className='flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto'>
                        <div className='flex flex-col items-center justify-center'>
                        <Image
                        
                        src={data.image}
                        alt='image'
                        width={400}
                        height={400}
                        className='rounded-lg mx-auto'
                        
                        
                    />

                    <p className='text-neutral-800 font-bold text-lg mt-4 text-center'>
                        &quot;{data.quote}&quot;

                    </p>

                    <p className='text-neutral-800 font-bold text-lg mt-4'>
                        {""}- {data.name}

                    </p>

                        </div>
                        

                    </div>
                    )

                })}

            </div>

        </div>

    </section>
  )
}

export default ShopifyStore;
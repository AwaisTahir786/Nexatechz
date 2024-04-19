import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

function FAQ() {
  return (
    <div className=' mt-20 md:py-10 bg-white w-full rounded-3xl text-black '>
        <div className='p-10 md:p-4 md:px-20'>
        <div className="text-3xl md:text-4xl font-bold text-black">
              Have questions ?
            </div>
            <div className="font-semibold text-3xl md:text-2xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 text-transparent bg-clip-text ">
              Get answers.
            </div>

        <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger className='' >What is DevCode?</AccordionTrigger>
      <AccordionContent>
        
Bird is a full fledge marketing agency that specializes in branding, web design, and digital marketing.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>How to start ?</AccordionTrigger>
      <AccordionContent>
      You can start by contacting us. We will get back to you within 24 hours.

      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Pricing ?</AccordionTrigger>
      <AccordionContent>
      We offer custom tailored solutions for your business. Contact us to get a quote.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-4">
      <AccordionTrigger>Support ?</AccordionTrigger>
      <AccordionContent>
      We offer Monday-Friday support for all our clients.
      </AccordionContent>
    </AccordionItem>
  </Accordion></div>

        </div>
        
   
  )
}

export default FAQ;
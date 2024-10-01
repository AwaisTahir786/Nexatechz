import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-8xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
        // icon : <div className="bg-white p-4 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
        title: "Website Development",
        description:
          "We build fully responsive websites that look great on all devices. Our websites are designed to convert visitors into customers.",
      
      },
      {
        // icon : <div className="bg-white p-4 rounded-full"><PiStorefront className="w-8 h-8 text-blue-600" /></div>,
        title: "Graphics Designing",
        description:
          "From small stores to large online retailers, we have the expertise to build a store that will help you grow your business.",
       
      },
      {
        // icon : <div className="bg-white p-4 rounded-full"><PiLock className="w-8 h-8 text-blue-600" /></div>,
        title: "Logo Design",
        description:
          "Secure authentication solutions for your website or app. We use the latest technology to keep your data safe.",
      
      },
      {
        // icon : <div className="bg-white p-4 rounded-full"><PiLock className="w-8 h-8 text-blue-600" /></div>,
        title: "Brand Identity",
        description:
          "Secure authentication solutions for your website or app. We use the latest technology to keep your data safe.",
      
      },
    
   
];

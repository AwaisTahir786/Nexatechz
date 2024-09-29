"use client";

import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Sliderone from "@/components/Sliderone";
import { useRef } from "react";
import Testmonials from "@/components/Testmonials";
import Pricing from "@/components/Pricing";
import Easysteps from "@/components/Easysteps";
import Pricingweb from "@/components/Pricingweb";
import Get from "@/components/Get";
import Faqnew from "@/components/FAQ/index";
import FAQ from "@/components/Faq_update";

export default function Home() {


  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicsDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresDesignRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);





  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };


  const scrollToGraphicDesign = () => {
    graphicsDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToShopifyStores = () => {
    shopifyStoresDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
 

  return (
    <div className="w-full md:items-center md:justify-center bg-black bg-grid-white/[0.02] relative overflow-hidden ">
      <Navbar
        ScrollGraphicsDesign={scrollToGraphicDesign}
        ScrollToBrands={scrollToBrands}
        ScrollToShopifySTore={scrollToShopifyStores}
        ScrollWebsiteDesign={scrollToWebsiteDesign} // Pass the function instead of the ref
      />{" "}
      {/* <Spotlight className="hidden md:flex md:left-80 " fill="white" /> */}
      <HeroSection />


    
       



      <div className="w-full pt-20">
          <Sliderone />
        </div>
        <div ref={servicesRef}>
        <Services />
        </div>


        <div ref={websiteDesignRef}>
        {/* <Websection/> */}
        </div>
        <Easysteps/>
        <Pricing/>
        {/* <Easystepsweb/> */}
        <Pricingweb/>
        

        <div ref={graphicsDesignRef}>
          {/* <GraphicDesign /> */}
        </div>
        {/* <div ref={shopifyStoresDesignRef}>
          <ShopifyStore />
        </div>
         */}
       
        <Get/>
        <Testmonials/>


        {/* <FAQ /> */}
        <FAQ/>
        {/* <Faqnew/> */}
        {/* <Footer/> */}
      </div>

  );
}

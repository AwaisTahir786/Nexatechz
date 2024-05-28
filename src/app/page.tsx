"use client";

import Brands from "@/components/Brands";
import GraphicDesign from "@/components/GraphicDesign";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import ShopifyStore from "@/components/ShopifyStore";
import Sliderone from "@/components/Sliderone";
import Website from "@/components/Website";
import { CardHoverEffectDemo } from "./snippets/card-hover-snippet";
import FAQ from "@/components/FAQ";
import { useRef } from "react";
import { DiEnvato } from "react-icons/di";
import Testmonials from "@/components/Testmonials";
import Pricing from "@/components/Pricing";
import Websection from "@/components/Websection";
import Easysteps from "@/components/Easysteps";
import Easystepsweb from "@/components/Easystepsweb";
import Pricingweb from "@/components/Pricingweb";
import Footer from "@/components/Footer";
import Get from "@/components/Get";

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
        <Easystepsweb/>
        <Pricingweb/>
        

        <div ref={graphicsDesignRef}>
          {/* <GraphicDesign /> */}
        </div>
        {/* <div ref={shopifyStoresDesignRef}>
          <ShopifyStore />
        </div>
         */}
       
        <Testmonials/>
        <Get/>

        <div ref={brandsRef}>
          {/* <Brands /> */}
        </div>
        {/* <FAQ /> */}
        {/* <Footer/> */}
      </div>

  );
}

import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import { useRef } from "react";

const Hero = () => {
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
    <div
      className="bg-[url('/bg.jpg')] bg-cover bg-center min-h-screen"
    >
      <Navbar
        ScrollGraphicsDesign={scrollToGraphicDesign}
        ScrollToBrands={scrollToBrands}
        ScrollToShopifySTore={scrollToShopifyStores}
        ScrollWebsiteDesign={scrollToWebsiteDesign}
      />{" "}
      <HeroSection />
    </div>
  );
};

export default Hero;

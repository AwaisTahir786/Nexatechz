import React from 'react';
import Image from 'next/image';
import logo from "@/pic/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-[#39FF14] mt-20 lg:mt-24 px-6 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl py-6 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 md:order-2">
          {/* Twitter/X */}
          <a href="https://twitter.com/namyakhann" className="hover:text-[#39FF14] text-white">
            <span className="sr-only">X</span>
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/namyakhan/" className="hover:text-[#39FF14] text-white">
            <span className="sr-only">LinkedIn</span>
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
            </svg>
          </a>

          {/* Email */}
          <a href="mailto:khannamya@gmail.com" className="hover:text-[#39FF14] text-white">
            <span className="sr-only">Email</span>
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"></path>
            </svg>
          </a>
        </div>

        {/* Logo and Text */}
        <div className="mt-2 md:order-1 md:mt-0 flex flex-col items-center md:items-start">
          <Image alt="footer logo" loading="lazy" width="150" height="50" src="/logo/logo.png" />
          <p className="text-center md:text-left text-xs leading-5 text-[#39FF14] mt-2">
            © Supafast 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

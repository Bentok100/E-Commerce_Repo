import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="w-full mb-20 md:mb-0">
      <div className="w-full bg-[#dbfcfcec] flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-6 gap-6 md:gap-0">
        {/* Left Section - Logo & Description */}
        <div className="w-full md:w-1/3 flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt=""
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <p className="text-lg md:text-xl text-black font-semibold">
              OneCart
            </p>
          </div>
          <p className="text-sm text-[#1e2223] hidden md:block">
            OneCart is your all-in-one online shopping destination, offering
            top-quality products, unbeatable deals, and fast delivery—all backed
            by trusted service designed to make your life easier every day.
          </p>
          <p className="text-sm text-[#1e2223] md:hidden">
            Fast. Easy. Reliable. OneCart Shopping
          </p>
        </div>

        {/* Middle Section - Company Links */}
        <div className="w-full md:w-1/4 flex flex-col items-center text-center gap-2">
          <p className="text-lg md:text-xl text-[#1e2223] font-sans font-semibold">
            COMPANY
          </p>
          <ul className="flex flex-col gap-1">
            <li className="text-sm text-[#1e2223] hidden md:block cursor-pointer">
              Home
            </li>
            <li className="text-sm text-[#1e2223] cursor-pointer">
              About us
            </li>
            <li className="text-sm text-[#1e2223] hidden md:block cursor-pointer">
              Delivery
            </li>
            <li className="text-sm text-[#1e2223] cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div className="w-full md:w-1/4 flex flex-col items-center text-center gap-2">
          <p className="text-lg md:text-xl text-[#1e2223] font-sans font-semibold">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-1">
            <li className="text-sm text-[#1e2223]">+91-9876543210</li>
            <li className="text-sm text-[#1e2223]">contact@onecart.com</li>
            <li className="text-sm text-[#1e2223] hidden md:block">
              +1-123-456-7890
            </li>
            <li className="text-sm text-[#1e2223] hidden md:block">
              admin@onecart.com
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-slate-400"></div>

      {/* Bottom Bar */}
      <div className="w-full h-[8vh] bg-[#dbfcfcec] flex items-center justify-center text-sm md:text-base text-[#1e2223] text-center px-4">
        Copyright 2025@onecart.com — All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;

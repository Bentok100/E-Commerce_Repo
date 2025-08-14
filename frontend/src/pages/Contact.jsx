import React from "react";
import Title from "../component/Title";
import contact from "../assets/ContactUs-2024.jpg";
import NewLetterBox from "../component/NewLetterBox";

function Contact() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-12 pt-20 px-4">
      <Title text1={"CONTACT"} text2={"US"} />

      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src={contact}
            alt="Contact Us"
            className="w-[90%] max-w-[500px] shadow-md shadow-black rounded-b-sm"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4 text-white">
          <p className="text-[17px] font-bold">Our Store</p>
          <div className="text-[15px] leading-relaxed">
            <p>12345 Random Station</p>
            <p>Random City, State, India</p>
          </div>
          <div className="text-[15px] leading-relaxed">
            <p>Tel: +91-9876543210</p>
            <p>Email: admin@onecart.com</p>
          </div>
          <p className="text-[17px] font-bold mt-2">Careers at OneCart</p>
          <p className="text-[15px]">
            Learn more about our teams and job openings
          </p>
          <button className="px-6 py-3 text-white bg-transparent border border-white hover:bg-slate-600 transition rounded-md w-fit">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewLetterBox />
    </div>
  );
}

export default Contact;

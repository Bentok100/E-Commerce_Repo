import React from "react";
import Title from "../component/Title";
import fOUR from "../assets/fOUR.jpg";
import NewLetterBox from "../component/NewLetterBox";

function About() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pt-[80px] px-[20px]">
      <div className="w-full max-w-[1366px] mx-auto flex flex-col items-center gap-[50px]">
        <Title text1={"ABOUT"} text2={"US"} />

        <div className="w-full flex items-center justify-center flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <img
              src={fOUR}
              alt=""
              className="lg:w-[65%] w-[80%] shadow-md shadow-black rounded-b-sm"
            />
          </div>
          <div className="lg:w-1/2 w-full flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-0">
            <p className="text-white md:text-[16px] text-[13px]">
              OneCart born for smart, seamless shopping—created to deliver
              quality products, trending styles, and everyday essentials in one
              place.
            </p>
            <p className="text-white md:text-[16px] text-[13px]">
              Modern shoppers—combining style, convenience, and affordability.
              Whether it's fashion, essentials, or trends, we bring everything
              you need to one trusted platform.
            </p>
            <p className="text-white text-[15px] lg:text-[18px] mt-[10px] font-bold">
              Our Mission
            </p>
            <p className="text-white md:text-[16px] text-[13px]">
              Our mission is to redefine online shopping by delivering quality,
              affordability, and convenience. OneCart connects customers with
              trusted products and brands.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-[10px]">
          <Title text1={"WHY"} text2={"CHOOSE US"} />

          <div className="w-full flex items-center justify-center lg:flex-row flex-col py-[40px] gap-[20px]">
            <div className="lg:w-1/3 w-[90%] h-[250px] border border-gray-100 flex flex-col items-center justify-center gap-[20px] px-[20px] py-[10px] text-white backdrop-blur-sm bg-[#ffffff0b]">
              <b className="text-[20px] font-semibold text-[#bff1f9]">
                Quality Assurance
              </b>
              <p className="text-center">
                Strict checks, reliable sourcing, and a commitment to
                satisfaction.
              </p>
            </div>

            <div className="lg:w-1/3 w-[90%] h-[250px] border border-gray-100 flex flex-col items-center justify-center gap-[20px] px-[20px] py-[10px] text-white backdrop-blur-sm bg-[#ffffff0b]">
              <b className="text-[20px] font-semibold text-[#bff1f9]">
                Convenience
              </b>
              <p className="text-center">
                Fast delivery, secure checkout, and everything in one place.
              </p>
            </div>

            <div className="lg:w-1/3 w-[90%] h-[250px] border border-gray-100 flex flex-col items-center justify-center gap-[20px] px-[20px] py-[10px] text-white backdrop-blur-sm bg-[#ffffff0b]">
              <b className="text-[20px] font-semibold text-[#bff1f9]">
                Exceptional Service
              </b>
              <p className="text-center">
                Quick responses and a smooth shopping experience every time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <NewLetterBox />
    </div>
  );
}

export default About;

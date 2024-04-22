import { Link } from "react-router-dom";
import logo from "/logo.svg";
import footerOne from "/footer-one.png";
import footerTwo from "/footer-two.png";

export default function Footer() {
  return (
    <div className="py-[70px] px-[80px] grid grid-cols-12 items-start  mt-20 gap-5 ">
      <div className="col-span-6 max-md:order-1 lg:col-span-3 flex flex-col gap-6">
        <Link to="/" className=" text-xl ml-0 flex items-center gap-3">
          <img src={logo} alt="brand-logo" />
          <span className="text-[#1E1E1E] mt-[9px] font-extrabold">HOME</span>
        </Link>
        <p className="font-poppins leading-6 text-sm lg:text-base font-normal w-full lg:w-[90%] mb-9 lg:mb-11">
        Life's stages set in bricks and dreams.
        </p>
      </div>
      <div className="col-span-12 lg:col-span-5 max-lg:order-3">
        <h4 className="font-poppins mb-6 font-semibold text-xl">
          Recent Properties
        </h4>

        <div className="flex flex-col gap-5 flex-wrap">
          <div className="flex gap-4">
            <img src={footerOne} alt="images" />
            <div className="flex flex-col gap-3">
              <p className="text-[#2F234F] text-[18px] font-medium leading-8">
                2972 Westheimer Rd. Santa Ana, Illinois 85486.
              </p>
              <p className="text-[#7F57F1] text-[18px] font-medium leading-7">
                $ 20,000
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={footerTwo} alt="images" />
            <div className="flex flex-col gap-3">
              <p className="text-[#2F234F] text-[18px] font-medium leading-8">
              789 Oak Avenue, Metro City
              </p>
              <p className="text-[#7F57F1] text-[18px] font-medium leading-7">
                $ 8,000
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-6 lg:col-span-4 self-center max-lg:order-2">
        <h4 className="font-poppins mb-6 font-semibold text-xl">
          Contact Info
        </h4>
      
        <p className="font-poppins leading-6 text-sm lg:text-base font-normal w-full lg:w-[90%] mb-9 lg:mb-11">
          2972 Westheimer Rd. Santa Ana, Illinois 85486.
        </p>

        <div className="flex flex-col gap-2 font-poppins text-[#2F234F] text-lg font-medium">
        <p >
          <span className="text-[#9791A7]">phone:</span> (+88) 01736873879
        </p>
        <p >
          <span className="text-[#9791A7]">email:</span> chaudhuree@gmail.com
        </p>
        <p >
          <span className="text-[#9791A7]">website:</span> www.home.com
        </p>
      </div>
      </div>
    </div>
  );
}

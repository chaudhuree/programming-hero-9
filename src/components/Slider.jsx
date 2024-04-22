import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import sliderBg from "/slider-bg.png";
import imageOne from "/slide-1.png";
import imageTwo from "/slide-2.png";
import imageThree from "/slide-4.png";
export default function Slider() {

  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation
        // pagination={{ type: "progressbar" }}
        effect="fade"
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        loop={true}
      >
        <SwiperSlide>
          <div
            style={{
              background: `url(${sliderBg}) center, no-repeat`,
              backgroundSize: "cover",
            }}
            className="w-full lg:h-[617px] overflow-hidden rounded-2xl py-14 px-9 lg:py-[91px] lg:px-[46px] z-10"
          >
            <div className="max-lg:mx-auto max-lg:text-center max-lg:w-full ">
              <p className="text-black font-poppins text-base font-normal leading-[120%] mb-4">
                Welcome to Realstate
              </p>
              <h2 className="text-[67px] font-poppins font-semibold leading-[120%] w-[80%] lg:w-[40%] max-lg:mx-auto">
                Manage Your Property
              </h2>
              <p className="leading-6 font-poppins text-base font-normal text-black my-6 w-[60%] lg:w-[40%] max-lg:mx-auto">
                Your will have everything nearby supermarket, buses , station,
                the carmen neighborhood, etc
              </p>
            </div>
            <div className="relative w-[80%] lg:w-[40%] max-lg:pb-10 max-lg:mx-auto">
              <input
                type="text"
                className="bg-[#FEFEFF] py-[18px] px-[24px] rounded-[40px] w-full absolute top-0 left-0"
                placeholder="enter your email"
              />
              <button className="py-[18px] px-[24px] rounded-[40px] text-white bg-[#1F1F1F] absolute top-0 right-0">
                Get a Quote
              </button>
            </div>
            <img
              src={imageOne}
              alt="slider image"
              className=" absolute top-[15%] right-0 max-lg:hidden w-[50%] z-40"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              background: `url(${sliderBg}) center, no-repeat`,
              backgroundSize: "cover",
            }}
            className="w-full lg:h-[617px] overflow-hidden rounded-2xl py-14 px-9 lg:py-[91px] lg:px-[46px] "
          >
            <div className="max-lg:mx-auto max-lg:text-center max-lg:w-full ">
              <p className="text-black font-poppins text-base font-normal leading-[120%] mb-4">
                Welcome to Realstate
              </p>
              <h2 className="text-[67px] font-poppins font-semibold leading-[120%] w-[80%] lg:w-[40%] max-lg:mx-auto">
              Luxurious Urban Living
              </h2>
              <p className="leading-6 font-poppins text-base font-normal text-black my-6 w-[60%] lg:w-[40%] max-lg:mx-auto">
              Discover the epitome of urban luxury with our stunning collection of high-end properties in vibrant city centers. Explore now.
              </p>
            </div>
            <div className="relative w-[80%] lg:w-[40%] max-lg:pb-10 max-lg:mx-auto">
              <input
                type="text"
                className="bg-[#FEFEFF] py-[18px] px-[24px] rounded-[40px] w-full absolute top-0 left-0"
                placeholder="enter your email"
              />
              <button className="py-[18px] px-[24px] rounded-[40px] text-white bg-[#1F1F1F] absolute top-0 right-0">
                Get a Quote
              </button>
            </div>
            <img
              src={imageTwo}
              alt="slider image"
              className=" absolute top-[10%] right-0 max-lg:hidden w-[50%]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              background: `url(${sliderBg}) center, no-repeat`,
              backgroundSize: "cover",
            }}
            className="w-full lg:h-[617px] overflow-hidden rounded-2xl py-14 px-9 lg:py-[91px] lg:px-[46px] "
          >
            <div className="max-lg:mx-auto max-lg:text-center max-lg:w-full ">
              <p className="text-black font-poppins text-base font-normal leading-[120%] mb-4">
                Welcome to Realstate
              </p>
              <h2 className="text-[67px] font-poppins font-semibold leading-[120%] w-[80%] lg:w-[40%] max-lg:mx-auto">
                Find Your Dream Home
              </h2>
              <p className="leading-6 font-poppins text-base font-normal text-black my-6 w-[60%] lg:w-[40%] max-lg:mx-auto">
              Unlock Your Ideal Living. Browse Exclusive Listings & Find Your Ultimate Sanctuary
              </p>
            </div>
            <div className="relative w-[80%] lg:w-[40%] max-lg:pb-10 max-lg:mx-auto">
              <input
                type="text"
                className="bg-[#FEFEFF] py-[18px] px-[24px] rounded-[40px] w-full absolute top-0 left-0"
                placeholder="enter your email"
              />
              <button className="py-[18px] px-[24px] rounded-[40px] text-white bg-[#1F1F1F] absolute top-0 right-0">
                Get a Quote
              </button>
            </div>
            <img
              src={imageThree}
              alt="slider image"
              className=" absolute -bottom-[5%] right-0 max-lg:hidden w-[60%]"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

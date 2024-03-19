import React from "react";

export default function Hero() {
  return (
    <>
      <div className="hero container mx-auto header-background bg-cover py-28 lg:py-[130px] mb-20 lg:mb-24">
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl">
            <h1 className="lg:leading-[76px] leading-[60px] font-lexend text-white text-4xl lg:text-[52px] font-semibold lg:font-bold mb-4 lg:mb-6">
              Uncover the Perfect Culinary Experience Designed Just for You!
            </h1>
            <p className="mb-8 lg:mb-10 font-lexend text-base lg:text-lg leading-8 lg:leading-10 max-sm:font-light lg:font-normal">
              Unlock Your Culinary Potential with Personalized Cooking Classes,
              Tailored to Your Tastes, Skill Level, and Culinary Ambitions.
              Experience the Art of Cooking in a Whole New Light!
            </p>
            <div className="lg:space-x-6 md:space-x-4 space-x-3">
              <button className="font-lexend font-medium lg:font-semibold text-blackMain rounded-[50px] px-6 lg:px-[30px] py-4 lg:py-5 bg-greenMain border border-greenMain">
                Explore Now
              </button>
              <button className="font-lexend font-medium lg:font-semibold text-white rounded-[50px] px-6 lg:px-[30px] py-4 lg:py-5 border border-white">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import clock from "/icons/clock.svg";
import fire from "/icons/fire.svg";

export default function Card({ recipe, handleWantToCook }) {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="card bg-base-100 shadow-xl p-4 lg:p-6 h-full">
      <figure className="mb-3 md:mb-4 lg:mb-6 rounded-2xl">
        <img src={recipe_image} alt="Shoes" className="rounded-2xl" />
      </figure>
      <div className="flex flex-col grow">
        <h3 className="text-blackSecondary font-lexend text-lg lg:text-xl font-medium lg:font-semibold mb-3 lg:mb-4">
          {recipe_name}
        </h3>
        <p className="text-grayTertiary font-firasans leading-6 lg:leading-7 text-sm md:text-base">
          {short_description}
        </p>
        <hr className="lg:mt-4 mt-3 lg:mb-6 mb-5" />
        <div className="flex flex-col grow">
          <h4 className="font-lexend text-base lg:text-lg font-medium mb-2 md:mb-3 lg:mb-4">
            Ingredients: {ingredients.length}
          </h4>
          <ul className="list-disc text-grayTertiary font-normal leading-6 lg:leading-8 text-base md:text-lg pl-5 md:pl-7 lg:pl-8">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <hr className="lg:mt-4 mt-3 lg:mb-6 mb-5" />
        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 md:flex-col lg:flex-row">
          <p className="flex items-center gap-2 text-grayMain">
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_22_7)">
                  <path
                    d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z"
                    stroke="#282828"
                    stroke-opacity="0.8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 12H15.5"
                    stroke="#282828"
                    stroke-opacity="0.8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 7V12"
                    stroke="#282828"
                    stroke-opacity="0.8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_22_7">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </figure>{" "}
            <span className="font-firasans text-base font-normal">
              {preparing_time} minutes
            </span>
          </p>
          <p className="flex items-center gap-2 text-grayMain">
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_36_169)">
                  <path
                    d="M12 12C14 9.04 12 5 11 4C11 7.038 9.227 8.741 8 10C6.774 11.26 6 13.24 6 15C6 16.5913 6.63214 18.1174 7.75736 19.2426C8.88258 20.3679 10.4087 21 12 21C13.5913 21 15.1174 20.3679 16.2426 19.2426C17.3679 18.1174 18 16.5913 18 15C18 13.468 16.944 11.06 16 10C14.214 13 13.209 13 12 12Z"
                    stroke="#282828"
                    stroke-opacity="0.8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_36_169">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </figure>{" "}
            <span className="font-firasans text-base font-normal">
              {calories} calories
            </span>
          </p>
        </div>
        <div className="text-left md:text-center lg:text-left">
          <button
            className="font-lexend text-base lg:text-lg font-medium text-blackMain rounded-[50px] px-5  md:px-6 py-[10px] lg:py-[13px] bg-greenMain border border-greenMain"
            onClick={() => handleWantToCook(recipe)}
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
}

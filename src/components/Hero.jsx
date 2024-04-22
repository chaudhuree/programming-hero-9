import Button from "./Button";
import HeroImage from "/HeroImage.jpg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/books");
  };
  return (
    <div className="hero bg-gray-200 container mx-auto py-10 md:py-16 lg:py-20 px-16 md:px-24  lg:px-[120px] rounded-3xl">
      <div className="flex gap-10 md:gap-16 lg:gap-[86px] items-center sm:flex-row flex-col">
        <div className="flex-1 max-sm:text-center">
          <h1 className="font-playfair-display text-gray-100 text-4xl  lg:text-37xl lg:leading-[84px] leading-normal font-bold mb-8 md:mb-12">
            Books to freshen up your bookshelf
          </h1>

          <div onClick={handleClick}>
            <Button
              text="View The List"
              customClass="md:py-[21] bg-limegreen-200"
            />
          </div>
        </div>
        <img
          src={HeroImage}
          className="object-contain max-lg:w-[150px] lg:w-[318px] lg:h-[394px] duration-300  transform hover:scale-105 "
        />
      </div>
    </div>
  );
}

import location from "/location.svg";
import page from "/page.svg";
import publisher from "/publisher.svg";
import { useNavigate } from "react-router-dom";

export default function ListedBookCard({ book }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/book/${book.bookId}`);
  };
  return (
    <div className="self-stretch rounded-2xl box-border flex flex-row flex-wrap items-start justify-center py-6 px-6 gap-6 max-w-full border border-solid border-gray-400">
      <didv className="h-[229px] w-[230px] rounded-2xl bg-gray-400 flex flex-row items-start justify-start pt-[29px] px-[50px] pb-7 box-border">
        <div className="h-[229px] w-[230px] relative rounded-2xl bg-gray-400 hidden" />
        <img
          className="h-[172px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
          loading="lazy"
          alt=""
          src={book.image}
        />
      </didv>
      <div className="flex-1 flex flex-col items-start justify-start gap-[15.5px]  max-w-full max-md:min-w-full">
        <div className="w-[631px] flex flex-col items-start justify-start gap-[16px] max-w-full">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <h3 className="m-0 relative text-inherit font-bold font-inherit max-sm:text-lgi">
                {book.bookName}
              </h3>
              <div className=" relative text-base font-medium font-work-sans text-gray-500 text-center inline-block">
                By : {book.author}
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0  pl-0 box-border gap-[16px] min-h-[73px] text-center text-base text-gray-600 font-work-sans  max-md:box-border max-lg:box-border">
            <div className="flex items-center gap-4 w-full flex-wrap">
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <b className="relative leading-[26px] inline-block text-gray-100 text-left min-w-[28px]">
                Tag
              </b>
              {book.tags.map((tag, index) => (
                <button
                  key={index}
                  className="cursor-pointer [border:none] py-[7px] px-4 bg-limegreen-500 rounded-11xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-limegreen-400"
                >
                  <div className="relative text-base font-medium font-work-sans text-limegreen-200 text-center inline-block ">
                    #{tag}
                  </div>
                </button>
              ))}
            </div>
            <div className="h-16  flex flex-row items-center justify-start py-5 px-0 box-border gap-[8px] text-gray-500">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src={location}
              />
              <div className="flex-1 relative">
                Year of Publishing: {book.yearOfPublishing}
              </div>
            </div>
            </div>
            <div className="h-16  flex flex-row items-center justify-start py-5 px-0 box-border gap-2">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src={publisher}
              />
              <div className="flex-1 relative">Publisher: {book.publisher}</div>
            </div>
            <div className="h-16  flex flex-row items-center justify-start py-5 px-0 box-border gap-2">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src={page}
              />
              <div className="flex-1 relative inline-block min-w-[68px]">
                Page {book.totalPages}
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-700" />
        <div className="self-stretch flex flex-row items-center justify-start max-w-full max-md:gap-[180px_90px]">
          <div className="flex flex-row items-start justify-start gap-[12px] max-w-full max-md:flex-wrap">
            <button className="cursor-pointer [border:none] py-[11px] px-5 bg-dodgerblue-200 rounded-11xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-cornflowerblue">
              <div className=" relative text-base font-work-sans text-dodgerblue-100 text-center inline-block">
                Category: {book.category}
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-[11px] px-5 bg-orange-200 rounded-11xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-chocolate">
              <div className="w-[83px] relative text-base font-work-sans text-orange-100 text-center inline-block min-w-[83px]">
                Rating: {book.rating}
              </div>
            </button>
            <button onClick={handleClick} className="cursor-pointer [border:none] py-2.5 px-5 bg-limegreen-200 rounded-11xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-limegreen-100">
              <div className="w-[110px] relative text-lg font-medium font-work-sans text-white text-center inline-block min-w-[110px]">
                View Details
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

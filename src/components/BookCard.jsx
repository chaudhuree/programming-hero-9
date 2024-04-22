import { Link } from "react-router-dom";
import starIcon from '/star.svg'

export default function BookCard({ book }) {
  return (
    <Link to={`/book/${book.bookId}`}>
    <div className="mx-w-[374px] rounded-2xl box-border flex flex-col  py-6 px-6 gap-6 max-w-full text-left text-5xl text-gray-100 font-playfair-display border border-solid border-gray-400 max-md:pt-5 max-md:pb-5 max-md:box-border h-full">
      <div className="self-stretch h-[230px] rounded-2xl bg-whitesmoke flex flex-row items-start justify-center py-8 px-5 box-border max-w-full">
        <div className="h-[230px] flex-1 relative rounded-2xl bg-whitesmoke hidden max-w-full" />
        <img
          className="h-[166px] w-[134px] relative object-contain z-10"
          loading="lazy"
          src={book.image}
        />
      </div>
      <div className=" flex flex-col  gap-5 h-full">
        <div className="flex flex-col items-start justify-start gap-[16px] grow">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-start justify-start gap-3 flex-wrap">
              
              {book.tags.map((tag,index) => (
                <button key={index} className="cursor-pointer [border:none] py-[7px] px-4 bg-limegreen-500 rounded-[30px] flex flex-row items-center justify-center whitespace-nowrap hover:bg-limegreen-400">
                <div className=" relative text-base font-medium font-work-sans text-limegreen-200 text-center inline-block min-w-[93px]">
                  {tag}
                </div>
              </button>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-4">
              <h3 className="m-0 relative text-inherit font-bold font-inherit max-sm:text-[19px]">
               {book.bookName}
              </h3>
              <div className=" relative text-base font-medium font-work-sans text-gray-300 text-center inline-block">
                {book.author}
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-dashed border-gray-400" />
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-center text-base text-gray-300 font-work-sans max-sm:flex-wrap">
          <div className=" relative font-medium inline-block min-w-[54px]">
            {book.category}
          </div>
          <div className="h-6 w-[66px] flex flex-row items-start justify-start gap-[8px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
              <div className="self-stretch relative font-medium inline-block min-w-[34px]">
               {Number(book.rating).toFixed(1)}
              </div>
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              src={starIcon}
            />
          </div>
        </div>
      </div>
    </div>
    </Link>

  );
}

import { useParams } from "react-router-dom";
import { useBookContext } from "../contextApi/Contextapi";
import Table from "../components/Table";
import Button from "../components/Button";
export default function BookPage() {
  let { books, readBook, wishListBook } = useBookContext();

  const { id } = useParams();
  const book = books.find((book) => book.bookId == id);
  if (!book) {
    return (
      <div className="flex items-center justify-center min-h-screen max-md:px-5">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-12 gap-6 container mx-auto mb-24 max-md:px-5">
      <div className="col-span-12 md:col-span-6 rounded-2xl bg-gray-200 p-[74px]">
        <img
          className="block mx-auto lg:max-h-[564px] lg:max-w-[425px]"
          src={book?.image}
        />
      </div>
      <div className="col-span-12 md:col-span-6 pl-6">
        <h1 className="font-playfair-display font-bold text-[40px] text-gray-100">
          {book.bookName}
        </h1>
        <h2 className="font-work-sans text-xl font-medium text-gray-300">
          By : {book.author}
        </h2>
        <hr className="mt-6 mb-4" />
        <p className="text-gray-300 text-xl font-medium font-work-sans">
          {book.category}
        </p>
        <hr className="mt-4 mb-6" />
        <p className="font-work-sans font-bold text-base text-gray-500 leading-[26px] mb-6">
          <span className="text-gray-100">Review : </span>
          {book.review}
        </p>
        <div className="flex flex-wrap gap-4 items-center font-work-sans">
          <p className="font-work-sans font-bold text-base text-gray-100 leading-[26px]">
            Tag
          </p>
          <div className="flex gap-3 items-center">
            {book.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-[30px] bg-limegreen-300 text-limegreen-200 text-base font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <hr className="my-6" />
        <div className="mb-8">
          <Table book={book} />
        </div>
        <div className="flex flex-wrap gap-4">
          <Button
            onClickHandler={() => readBook(book)}
            text="Read"
            customClass="bg-green-400 text-gray-900 hover:bg-green-300 hover:text-white hover:border-white border border-green-400"
          />
          <Button
            onClickHandler={() => wishListBook(book)}
            text="Wishlist"
            customClass="bg-[#50B1C9] text-white hover:bg-sky-500 hover:text-white hover:border-white"
          />
        </div>
      </div>
    </div>
  );
}

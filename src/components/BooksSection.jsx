import { useBookContext } from "../contextApi/Contextapi";
import BookCard from "./BookCard";
export default function BooksSection() {
  const { books } = useBookContext();

  if (!books) {
    return (
      <div className="flex items-center justify-center min-h-screen max-md:px-5">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <section className=" flex flex-col items-start justify-start gap-[36px]  text-left text-[40px] text-gray-100 font-playfair-display mq750:gap-[18px_36px] container mx-auto my-24 ">
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[114px] mq450:text-5xl mq1050:text-[32px]">
          Books
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-6 w-full">
        {books?.map((book) => (
          <div key={book.bookId} className="lg:col-span-4 max-lg:col-span-6 max-sm:col-span-12">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </section>
  );
}

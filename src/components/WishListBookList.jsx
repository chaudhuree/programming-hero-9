import ListedBookCard from "./ListedBookCard";
import { useBookContext } from "../contextApi/Contextapi";
export default function WishListBookList() {
  const {sortedWishlistBooks} = useBookContext();
  return (
    <div className="container mx-auto max-md:px-5">
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
        {sortedWishlistBooks?.map((book, index) => (
          <ListedBookCard key={index} book={book} />
        ))}
      </div>
    </div>
  )
}

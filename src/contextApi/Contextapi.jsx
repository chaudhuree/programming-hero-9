import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  let [readBooks, setReadBooks] = useState([]);
  let [wishList, setWishList] = useState([]);
  const [sortBy, setSortBy] = useState(''); 
  const [sortedReadingBooks, setSortedReadingBooks] = useState([]);
  const [sortedWishlistBooks, setSortedWishlistBooks] = useState([]);

  useEffect(() => {
    getFromLocalStorage();
    let readBooks = localStorage.getItem("readBooks");
    let wishList = localStorage.getItem("wishList");
    if (readBooks) {
      setReadBooks(JSON.parse(readBooks));
    }
    if (wishList) {
      setWishList(JSON.parse(wishList));
    }
  }, []);
  const getFromLocalStorage = async () => {
    const books = localStorage.getItem("books");
    if (books) {
      setBooks(JSON.parse(books));
    } else {
      await fetchBooks();
    }
  };
  const fetchBooks = async () => {
    const response = await fetch("./data.json");
    const data = await response.json();
    setBooks(data.books);
    localStorage.setItem("books", JSON.stringify(data.books));
  };

  const readBook = (book) => {
    if (readBooks.find((readBook) => readBook.bookId === book.bookId)) {
      toast.error("Book is already in Read List");
    } else {
      let updatedWishList = wishList.filter(
        (wishListBook) => wishListBook.bookId !== book.bookId
      );
      setWishList(wishList);
      localStorage.setItem("wishList", JSON.stringify(updatedWishList));
      setReadBooks([...readBooks, book]);
      toast.success("Added to Read List");
      localStorage.setItem("readBooks", JSON.stringify([...readBooks, book]));
    }
  };

  const wishListBook = (book) => {
    if (readBooks.find((readBook) => readBook.bookId === book.bookId)) {
      toast.error("Book is already in Read List");
    } else if (wishList.find((wishList) => wishList.bookId === book.bookId)) {
      toast.error("Book is already in Wishlist");
    } else {
      setWishList([...wishList, book]);
      toast.success("Added to Wishlist");
      localStorage.setItem("wishList", JSON.stringify([...wishList, book]));
    }
  };

  // Function to sort books by selected field in descending order
  const sortBooks = (field) => {
    const sortedReading = [...readBooks].sort((a, b) => {
      if (
        field === "rating" ||
        field === "totalPages" ||
        field === "yearOfPublishing"
      ) {
        return b[field] - a[field];
      } else {
        return true;
      }
    });
    const sortedWishlist = [...wishList].sort((a, b) => {
      if (
        field === "rating" ||
        field === "totalPages" ||
        field === "yearOfPublishing"
      ) {
        return b[field] - a[field];
      } else {
        return true;
      }
    });
    setSortedReadingBooks(sortedReading);
    setSortedWishlistBooks(sortedWishlist);
  };

  useEffect(() => {
    sortBooks(sortBy);
  }, [sortBy, books, readBooks, wishList]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };


  const contextValue = {
    books,
    readBook: readBook,
    wishListBook: wishListBook,
    handleSortChange,
    sortedReadingBooks,
    sortedWishlistBooks,
    sortBy,
    readBooks
  };

  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);

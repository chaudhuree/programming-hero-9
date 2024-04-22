import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import ReadBooksList from "../components/ReadBooksList";
import WishListBookList from "../components/WishListBookList";
import { useBookContext } from "../contextApi/Contextapi";

export default function ListedBooksPage() {
  const [tabIndex, setTabIndex] = useState(0);
  const { handleSortChange, sortBy } = useBookContext();
  return (
    <div className="container mx-auto max-md:px-5 text-gray-300 font-work-sans text-lg font-normal mb-24">
      <div className="bg-gray-200 rounded-2xl p-[33px] flex justify-center items-center">
        <p className="text-gray-100 text-center font-work-sans text-xl md:text-[28px] font-bold">
          Books
        </p>
      </div>
      {/*
        sort
      */}
      <div className="my-8 mb-14 flex items-center justify-center">
        <select
          className="bg-limegreen-100 py-[14px] px-[20px] rounded-lg text-white font-work-sans text-lg font-semibold 
      "
          onChange={handleSortChange}
          value={sortBy}
        >
          <option selected>Sort By</option>
          <option value="rating">Rating</option>
          <option value="totalPages">Number of Pages</option>
          <option value="yearOfPublishing">Published Year</option>
          {/* Add more options for other fields if needed */}
        </select>
      </div>
      {/*
        sort
      */}
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>
          <TabPanel>
            <ReadBooksList />
          </TabPanel>
          <TabPanel>
            <WishListBookList />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

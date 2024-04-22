import React from "react";

export default function Table({ book }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm md:text-base font-normal leading-[26px] text-left rtl:text-right font-work-sans text-gray-100">
        <tbody>
          <tr className="bg-white dark:bg-gray-800  ">
            <td
              scope="row"
              className=" font-medium text-gray-500 whitespace-nowrap dark:text-white pb-3"
            >
              Number of Pages
            </td>
            <th className="font-semibold pb-3">{book.totalPages}</th>
          </tr>
          <tr className="bg-white dark:bg-gray-800 ">
            <td
              scope="row"
              className=" font-medium text-gray-500 whitespace-nowrap dark:text-white pb-3"
            >
              Publisher
            </td>
            <th className="font-semibold pb-3">{book.publisher}</th>
          </tr>
          <tr className="bg-white dark:bg-gray-800 ">
            <td
              scope="row"
              className=" font-medium text-gray-500 whitespace-nowrap dark:text-white pb-3"
            >
              Year of Publishing
            </td>
            <th className="font-semibold pb-3">{book.yearOfPublishing}</th>
          </tr>
          <tr className="bg-white dark:bg-gray-800 ">
            <td
              scope="row"
              className=" font-medium text-gray-500 whitespace-nowrap dark:text-white"
            >
              Rating
            </td>
            <th className="font-semibold">{book.rating}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

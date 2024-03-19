import React from "react";

export default function Table({ handlePreparing, data }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right table ">
        <thead className="text-sm lg:text-base text-grayTertiary  font-firasans font-medium">
          <tr>
            <th scope="col" className="lg:px-3 px-2 py-2"></th>
            <th scope="col" className="lg:px-3 px-2 py-2">
              Name
            </th>
            <th scope="col" className="lg:px-3 px-2 py-2">
              Time
            </th>
            <th scope="col" className="lg:px-3 px-2 py-2">
              Calories
            </th>
            {handlePreparing ? <th scope="col" className=" py-2"></th> : ""}
          </tr>
        </thead>
        <tbody className="font-firasans lg:text-base leading-5 lg:leading-[26px] font-normal text-grayMain bg-[#f9f9f9] ">
          {data?.map((recipe, index) => (
            <tr key={index} className="border-0">
              <th
                scope="row"
                className="lg:px-3 px-2 py-2 font-medium text-gray-900"
              >
                {index + 1}
              </th>
              <td className="lg:px-3 px-2 py-2">{recipe?.recipe_name}</td>
              <td className="lg:px-3 px-2 py-2">{recipe?.preparing_time}</td>
              <td className="lg:px-3 px-2 py-2">{recipe?.calories}</td>
              {handlePreparing ? (
                <td className="py-2">
                  <button
                    className="bg-greenMain text-blackMain py-[6px] lg:py-[9px] px-3 lg:px-[18px] font-firasans text-sm lg:text-base font-medium leading-5 lg:leading-[26px] rounded-[50px]"
                    onClick={() => handlePreparing(recipe)}
                  >
                    Preparing
                  </button>
                </td>
              ) : (
                ""
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

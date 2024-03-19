import React from 'react'

export default function Title({title}) {
  return (
    <div className="mb-4 md:mb-5 lg:mb-6 mt-6 md:mt-7 lg:mt-8 relative">
    <h2 className="font-lexend text-xl lg:text-2xl font-semibold mx-auto text-center pb-3 lg:pb-4">
      {title}
    </h2>
    <div className="absolute w-[50%] lg:w-[60%] h-[1px] bg-gray-200 left-0 right-0 mx-auto"></div>
  </div>
  )
}

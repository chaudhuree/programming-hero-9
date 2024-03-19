import React from 'react'

export default function Title({heading="heading",subheading="subheading"}) {
  return (
    <div className='text-center flex flex-col gap-5 lg:gap-6 max-w-2xl lg:max-w-3xl container mx-auto mb-10 lg:mb-12'>
      <h1 className='font-lexend text-4xl lg:text-[40px] font-medium lg:font-semibold text-blackMain'>{heading}</h1>
      <p className='lg:leading-[26px] leading-5 text-grayMain'>{subheading}</p>
    </div>
  )
}

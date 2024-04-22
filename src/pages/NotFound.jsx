import {useEffect} from 'react'
import notFound from '/notfound.svg'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not Found '
  }, [])

  return (
    <div className='h-dvh  w-full grid place-items-center mt-5'>
      <img src={notFound} alt="not found" className='object-cover w-1/2'/>
    </div>
  )
}

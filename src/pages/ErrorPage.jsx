import NotFound from '/notFound.svg'
export default function ErrorPage() {
  return (
    <div className='container mx-auto max-md:px-5 flex justify-center items-center min-h-screen mb-24'>
    <img src={NotFound} alt="" />
    </div>
  )
}

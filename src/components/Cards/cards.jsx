import {Products} from './carddata';

  
export default function Cards() {

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className='flex items-center justify-between flex-wrap'>
          <h2 className="text-sm md:text-xl font-bold text-gray-900">All Courses Pdf Downlod</h2>
          <a href='https://web.telegram.org/k/#-2001035885' className="text-sm md:text-xl font-bold text-gray-900">Join Telegram Chanals</a>
          </div>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {Products.map((product) => (
              <div key={product.id} className="shadow-xl hover:scale-105 duration-1000 ease-in-out p-3 rounded-md group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg text-gray-700">
                    {product.name}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">Only {product.price}</p>
                </div>
                <div className='cursor-pointer mt-3 text-end'>
                <a href='https://web.telegram.org/k/#-2001035885' className = 'bg-sky-500 px-4 p-1 rounded-md focus:bg-sky-600 text-white font-semibold mt-2'>Telegram</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
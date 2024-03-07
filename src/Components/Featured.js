import React from 'react'
import FeaturedBg from '../images/FeaturedBg/lines.jpg'

const Featured = () => {
  return (
  <div className='bg-white' style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1)), url(${FeaturedBg})`, backgroundSize: 'cover', backgroundPosition: 'center' , backgroundAttachment : 'fixed' }}>
      <div className='container mx-auto px-4 py-16'>
      <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">We believe the future <br /> <span class="text-orange-500">belongs to creators</span></h1>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8 xl:mt-12 gap-8 xl:gap-16'>


          {/* Card 1 */}
        <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-300 rounded-xl bg-opacity-60 backdrop-blur-md backdrop-filter hover:shadow-lg hover:-translate-y-2 transition duration-300 ease-in-out transform ">
                <span class="inline-block p-3 text-blue-500 bg-orange-500 rounded-full dark:text-white ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                </span>

                <h1 class="text-xl font-semibold text-gray-700 capitalize">Copy & paste components</h1>

                <p class="text-gray-500 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600 ">
                    <span class="mx-1">read more</span>
                    <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-300 rounded-xl bg-opacity-60 backdrop-blur-md backdrop-filter hover:shadow-lg hover:-translate-y-2 transition duration-300 ease-in-out transform ">
                <span class="inline-block p-3 text-blue-500 bg-orange-500 rounded-full dark:text-white ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                </span>

                <h1 class="text-xl font-semibold text-gray-700 capitalize">Copy & paste components</h1>

                <p class="text-gray-500 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform hover:underline hover:text-blue-600 hover:shadow-lg hover:-translate-y-2 transition duration-300 ease-in-out transform ">
                    <span class="mx-1">read more</span>
                    <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-300 rounded-xl bg-opacity-60 backdrop-blur-md backdrop-filter hover:shadow-lg hover:-translate-y-2 transition duration-300 ease-in-out transform  ">
                <span class="inline-block p-3 text-blue-500 bg-orange-500 rounded-full dark:text-white ">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                </span>

                <h1 class="text-xl font-semibold text-gray-700 capitalize">Copy & paste components</h1>

                <p class="text-gray-500 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 ">
                    <span class="mx-1">read more</span>
                    <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { FaDownload , FaRegSmile } from "react-icons/fa";
import { RiClipboardLine } from 'react-icons/ri';

const Counter = () => {
  const [counter, setCounter] = useState(false);
  
  return (
    //     <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
    //     <div>

    //         <section className="bg-white">
    //         <hr
    //   class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
    //   <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 md:py-6 lg:px-8">
    //     <div className="mx-auto max-w-3xl text-center">
    //       <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted by eCommerce Businesses</h2>

    //       <p className="mt-4 text-gray-500 sm:text-xl">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
    //         provident impedit esse recusandae facere libero harum sequi.
    //       </p>
    //     </div>

    //     <div className="mt-8 sm:mt-12">
    //       <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
    //         <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
    //           <dt className="order-last text-lg font-medium text-gray-500">Total Sales</dt>

    //           <dd className="text-4xl font-extrabold text-orange-700 md:text-5xl">

    //           ${
    //             counter  &&
    //             <CountUp start={1} end={10} duration={2.75}/>
    //           }
    //             m</dd>
    //         </div>

    //         <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
    //           <dt className="order-last text-lg font-medium text-gray-500">Official Addons</dt>

    //           <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
    //           ${
    //             counter  &&
    //             <CountUp start={1} end={10} duration={2.75}/>
    //           }
    //             m
    //           </dd>
    //         </div>

    //         <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
    //           <dt className="order-last text-lg font-medium text-gray-500">Total Addons</dt>

    //           <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
    //         </div>
    //       </dl>
    //     </div>
    //   </div>
    // </section>
    //         </div>

    //         </ScrollTrigger>
<ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
  <div className="flex items-center justify-around bg-white px-4">
    <div className="max-w-4xl py-8 sm:py-24 w-full flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 md:mr-8 mb-4 md:mb-0">
        <h1 className="md:text-4xl lg:text-4xl text-3xl font-bold text-gray-800 text-center mb-8">Manage Your <span className="text-orange-400">Products</span></h1>
        <p className="text-lg text-center text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="text-center md:text-left justify-center sm:mt-4 items-center flex w-full">
          <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
        </div>
      </div>

      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

      <div className="md:w-1/2 flex flex-col justify-center">
        <div className={`flex items-center justify-end mb-4 ${counter ? 'animate-fadeUp' : ''}`}>
          <div className="w-80 h-40 bg-gray-200 rounded-3xl flex justify-around items-center p-4 shadow-md">
            <div className="bg-gray-800 opacity-50  rounded-full p-4">
              <FaDownload className="text-white text-2xl" />
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold">
              {
                  counter  &&
                <CountUp start={1000} end={50000} duration={2}/>
            }
                
              </div>
              <p className="text-gray-600 text-sm">Items Download</p>
            </div>
          </div>
        </div>

        <div className={`flex items-center justify-start mb-4 ${counter ? 'animate-fadeUp' : ''}`}>
          <div className="w-80 h-40 bg-gray-200  rounded-3xl flex justify-around items-center p-4 shadow-md">
            <div className="bg-gray-800 opacity-50  rounded-full p-4">
              <RiClipboardLine className="text-white text-2xl" />
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold">
              {
                  counter  &&
                <CountUp start={100} end={5000} duration={2}/>
            }
                
              </div>
              <p className="text-gray-600 text-sm">Tracking Report</p>
            </div>
          </div>
        </div>

        <div className={`flex items-center justify-end ${counter ? 'animate-fadeUp' : ''}`}>
          <div className="w-80 h-40 bg-gray-200 rounded-3xl flex justify-around items-center p-4 shadow-md">
            <div className="bg-gray-800 opacity-50 rounded-full p-4">
              <FaRegSmile className="text-white text-2xl" />
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold">
              {
                  counter  &&
                <CountUp start={50} end={10000} duration={2}/>
            }
                
              </div>
              <p className="text-gray-600 text-sm">Satisfied Client</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
    </div>
  </div>
</ScrollTrigger>




  
  );
};

export default Counter;

import React from 'react';
import aboutImg from '../images/aboutUs.jpg';
import aboutImg2 from '../images/aboutUs2.jpg';

const About = () => {
  return (
    <div>
      <div className=' min-h-screen container mx-auto p-10 '>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div>
          <img src={aboutImg} alt="About Us" className="w-full" />
        </div>
        <div>
          <div className="text-center sm:text-left">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">About <span className="text-orange-600">Our Company</span></h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
              doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
              voluptatum.
            </p>
            <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
          </div>
        </div>
      </div>

        {/* {divider} */}

<hr
  class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
     
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div className='order-1'>
          <img src={aboutImg2} alt="About Us" className="w-full" />
        </div>
        <div>
          <div className="text-center sm:text-left">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">TeamWork</span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">Around <span className="text-orange-600">The Globally</span></h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
              doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
              voluptatum.
            </p>
          </div>
        </div>
      </div>
      </div>
        
        
     
  

    </div>
  );
};

export default About;

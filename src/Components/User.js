import React from 'react'
import rew from '../images/reviewsImg/reveiw1.jpg'
import rew2 from '../images/reviewsImg/reveiw2.jpg'
import rew3 from '../images/reviewsImg/reveiw3.jpg'
import rew4 from '../images/reviewsImg/reveiw4.jpg'
import rew5 from '../images/reviewsImg/review5.jpg'
import rew6 from '../images/reviewsImg/reveiw6.jpg'
import rew7 from '../images/reviewsImg/reveiw7.jpg'
import rew8 from '../images/reviewsImg/reveiw8.jpg'


import Marquee from "react-fast-marquee";

const User = () => {
  return (
    <div className="mx-auto p-16 h-auto ">
    <div className="marquee-content">
    <h1 className="text-3xl font-bold text-center leading-10">
  More than <span className='text-orange-700'>645,972</span>  creators send  over 2.5 billion <br className="hidden md:inline" /> 
  <span className="md:pl-4">emails each month</span>
</h1>
<p className="mt-4 text-md text-center text-gray-500">Your favorite creators use Website to connect with their audience and earn a living online.</p>




      <Marquee pauseOnHover={true} gradient= {true} gradientWidth={100} autoFill={true}>
      <div className="flex justify-center mt-16 space-x-8 overflow-x-hidden m-4">
        <div className="flex flex-col items-center ">
          <img className="w-24 h-24 rounded-full mb-2 object-contain" src={rew} alt="Name 1" />
          <span className="font-semibold">Name 1</span>
          <span className="text-gray-600 ">name1@example.com</span>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-24 h-24 rounded-full mb-2 object-cover" src={rew2} alt="Name 2" />
          <span className="font-semibold">Name 2</span>
          <span className="text-gray-600">name2@example.com</span>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-24 h-24 rounded-full mb-2 object-cover" src={rew3} alt="Name 2" />
          <span className="font-semibold">Name 2</span>
          <span className="text-gray-600">name2@example.com</span>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-24 h-24 rounded-full mb-2 object-cover " src={rew4} alt="Name 2" />
          <span className="font-semibold">Name 2</span>
          <span className="text-gray-600">name2@example.com</span>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-24 h-24 rounded-full mb-2 object-cover" src={rew5} alt="Name 2" />
          <span className="font-semibold">Name 2</span>
          <span className="text-gray-600">name2@example.com</span>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-24 h-24 rounded-full mb-2 object-cover" src={rew6} alt="Name 2" />
          <span className="font-semibold">Name 2</span>
          <span className="text-gray-600">name2@example.com</span>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-24 h-24 rounded-full mb-2 object-cover" src={rew7} alt="Name 2" />
          <span className="font-semibold">Name 2</span>
          <span className="text-gray-600">name2@example.com</span>
        </div>
        <div className="flex flex-col items-center ">
          <img className="w-24 h-24 rounded-full mb-2 object-cover" src={rew8} alt="Name 2" />
          <span className="font-semibold">Name 2</span>
          <span className="text-gray-600">name2@example.com</span>
        </div>
       
      </div>

      </Marquee>
    </div>
  </div>
  )
}

export default User
import React, { useState } from 'react';
import AudienceImg from '../images/AudienceImg.png';
import About from '../images/aboutUs.jpg'
import About2 from '../images/aboutUs2.jpg'






const Audience = () => {


  const[openAccordin, setOpenAccordin] = useState(1)



  const handleClick = (index) => {
   
    setOpenAccordin(openAccordin === index ? null : index);
  }
  
  return (
    
    <div className='container mx-auto '>
      <div className='grid grid-cols-6 gap-4 items-center'>
        <div className='col-span-6  flex justify-center items-center'>
          <h1 className='my-4 font-bold text-2xl sm:text-4xl'>
            <span className="text-orange-600">The Globally</span> hub you can rely on to:
          </h1>
        </div>

        <div className='col-span-6 md:col-span-2 lg:col-span-3 flex justify-center items-center'>
          {(openAccordin === 1 || openAccordin === null) && (
            <img src={AudienceImg} alt="" style={{ maxWidth: "70%", height: "auto" }} />
          )}
          {openAccordin === 2 && <img src={About} alt="" className="max-w-64 h-auto" />}
          {openAccordin === 3 && <img src={About2} alt="" className=" max-w-96 h-auto" />}
        </div>


        {/* Vertical Divider */}
      

          {/* // Accordin */}

        <div className='col-span-6 md:col-span-2 lg:col-span-3 '>
        <div className="space-y-4">
  <details className="group [&_summary::-webkit-details-marker]:hidden" >
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
     onClick={() => handleClick(1)}>
      <h2 className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

      <svg
        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <p className="mt-4 px-4 leading-relaxed text-gray-700">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
      recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
      consequuntur distinctio corporis earum similique!
    </p>
  </details>

  <details className="group [&_summary::-webkit-details-marker]:hidden " > 
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
      onClick={() => handleClick(2)}>
      <h2 className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

      <svg
        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <p className="mt-4 px-4 leading-relaxed text-gray-700 max-h-[70vh] overflow-y-auto">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
      recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
      consequuntur distinctio corporis earum similique!
    </p>
  </details>
  <details className="group [&_summary::-webkit-details-marker]:hidden " >
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
      onClick={() => handleClick(3)} >
      <h2 className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

      <svg
        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <p className="mt-4 px-4 leading-relaxed text-gray-700 max-h-[70vh] overflow-y-auto">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
      recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
      consequuntur distinctio corporis earum similique!
    </p>
  </details>
</div>




        </div>
        
      </div>
    </div>
 
  );
}

export default Audience;

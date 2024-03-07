import React, { useState, useEffect } from 'react';
import testiCoaches from '../images/testiImg/testi1.png';
import testiPodcaster from '../images/testiImg/testi2.png';
import testiAuthor from '../images/testiImg/testi3.png';
import testiSinger from '../images/testiImg/testi2.png';

const Testimonials = () => {
  const [selectedItem, setSelectedItem] = useState({});

  const menuItems = [
    { title: 'Coaches', 
      items: [
        { name: 'John Doe', description: 'Experienced fitness coach with 10 years of training experience.', cta: 'Contact John', image: testiCoaches },
        // Add more coaches with their details
      ]
    },
    { title: 'Podcaster', 
      items: [
        { name: 'Alex', description: 'Bestselling author with captivating stories and insightful advice', cta: 'Listen Now', image: testiPodcaster },
        // Add more podcasters with their details
      ]
    },
    { title: 'Author', 
      items: [
        { name: 'Harry', description: 'Bestselling author with captivating stories and insightful advice', cta: 'Read Now', image: testiAuthor },
        // Add more authors with their details
      ]
    },
    { title: 'Singer', 
      items: [
        { name: 'Max', description: 'Talented singer with a unique voice and heartfelt performances', cta: 'Listen Now', image: testiSinger },
        // Add more singers with their details
      ]
    },
  ];

  useEffect(() => {
    // Set the initial selected item to the first item in menuItems
    setSelectedItem(menuItems[0].items[0]);
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex flex-col md:flex-row justify-evenly mx-auto items-center p-4 md:p-16">
      <div className="mb-8 md:mb-0">
        <div className="mb-8 flex flex-wrap justify-center">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`mr-4 mb-4 md:mb-0 text-lg font-bold ${
                selectedItem.title === item.title ? 'text-orange-500' : 'text-gray-500'
              }`}
              onClick={() => handleItemClick(item.items[0])}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div>
          {selectedItem.name && (
            <div className="mb-4">
              <h3 className="text-xl font-bold">{selectedItem.name}</h3>
              <p className="mb-2">{selectedItem.description}</p>
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                {selectedItem.cta}
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="ml-8">
        {selectedItem.image && (
          <img
            src={selectedItem.image}
            alt="Testimonial"
            className="w-full md:w-[28rem] h-auto object-cover rounded"
          />
        )}
      </div>
    </div>
  );
};

export default Testimonials;

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const cardsData = [
  {
    title: 'Card 1',
    description: 'This is the description for Card 1.',
  },
  {
    title: 'Card 2',
    description: 'This is the description for Card 2.',
  },
  // Add more card data as needed
];

export default function ViewCourseContent() {
  return (
    <>
      <h2 className="py-4 bg-gray-200 text-center">Python</h2>
      <div className="flex flex-col items-center justify-center">
        {cardsData.map((card, index) => (
          <div className="card w-4/5 mb-4 p-4 bg-gray-500" key={index}> {/* Updated class here */}
            <div className="flex items-center justify-between mb-2">
              <h2 className="card-title">{card.title}</h2>
              <div className="flex items-center">
                <FaArrowRight />
              </div>
            </div>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

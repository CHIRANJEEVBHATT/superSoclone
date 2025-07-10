import React from 'react';

const Body3 = ({ testimonials }) => {
  return (
    <div className="text-center bg-gray-100 py-20 px-4">
      <h1 className="font-bold text-4xl mb-4">
        Join over 100,000 creators using Super
      </h1>

      <p className="text-gray-500 max-w-3xl mx-auto">
        Our mission is to create the best web hosting platform you’ve ever used.
        We love building beautiful and useful software fueled by feedback from our customers.Here’s what some of them have to say.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl max-h-8xl mx-auto mt-12 ">
  {testimonials.map((item, index) => (
    <div
      key={index}
      className="bg-white rounded-lg shadow-md p-6 max-w-sm w-full break-words"
    >
      <div className="flex items-center gap-3 mb-2">
        <img
          src={item.image}
          alt="profile"
          className="rounded-full h-15 w-15 mt-3"
        />
        <p className="font-semibold text-gray-700 ml-14">{item.name}</p>
        
      </div>

      <p className="text-sm text-gray-500  ml-10 -mt-2 ">{item.email}</p>

      <p className="text-gray-700 text-lg text-left mt-4">
        {item.comment.length > 300
          ? item.comment.slice(0, 300) + '...'
          : item.comment}
      </p>
    </div>
  ))}
</div>

    </div>
  );
};

export default Body3;

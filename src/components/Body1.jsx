import React from 'react';

const Body1 = () => {
  return (
    <div className="text-center px-4 md:px-10 py-10">
      <h1 className="text-black font-bold text-6xl leading-tight mt-10 md:text-center">
        Create Custom 
        Website with Notion
      </h1>

      <p className="text-gray-500 text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
        Transform your Notion pages into fully customized, professional websites in less than a
        minute. Enjoy high performance, SEO optimization, and a compelling user experience with
        great-looking instant page loads. Focus on creating while Super handles the rest.
      </p>
      <button className="text-black font-medium bg-amber-400 px-5 py-3 rounded-lg mt-6">
        Get started for free
      </button>
      <p className="text-gray-500 mt-2">No credit card required</p>


      <div className="flex flex-wrap justify-center items-center mt-12 gap-6">
        <img src="/notion1.png" alt="From Notion" className="h-60" />
        <img src="/arrow.png" alt="Arrow" className="h-8 w-10 mt-10" />
        <img src="/notion2.png" alt="To Super Site" className="h-60" />
      </div>


      <div className="flex justify-center gap-32 mt-4 text-gray-600 text-sm">
        <p>From Notion Site</p>
        <p>To Custom Super Site</p>
      </div>

     
      <p className="text-gray-600 mt-12">Trusted by teams at</p>

      <div className="flex flex-col items-center">
        <div className="flex gap-4 mb-4 mt-11 flex-wrap justify-center">
          <img src="team1.png" alt="team1" className="h-10" />
          <img src="team2.png" alt="team2" className="h-10" />
          <img src="team3.png" alt="team3" className="h-10" />
          <img src="team4.png" alt="team4" className="h-10" />
        </div>
        <img src="team5.png" alt="team5" className="h-12" />
      </div>
    </div>
  );
};

export default Body1;

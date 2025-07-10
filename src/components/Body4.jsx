import React from 'react';

const Body4 = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-20">
      <h1 className="text-4xl font-bold mb-6">Customize to match your brand</h1>
      <p className="text-gray-600 text-lg mb-10">
        Style the look and feel of your site with no-code themes and designer templates. <br />
        Everything can be customized inside Super without code to make you proud of the <br />
        unique site you share with the world. Add custom-code only if you want to.
      </p>

      <div className="flex justify-center mb-16">
        <img src="notion.png" alt="notion" className="h-[500px] object-contain" />
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">World-class Performance</h2>
          <p className="text-gray-600 text-lg">
            Pages load instantly anywhere in the world giving your site visitors a pleasant and snappy
            experience — they’ll never close the page for taking too long to load. On average, Super sites
            perform better than any industry leading website builder.
          </p>
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">Optimized for SEO</h2>
          <p className="text-gray-600 text-lg">
            Social sharing cards are automatically created from page content and your site’s HTML is
            optimized to use best practices for search engines. Super sites are automatically built with
            the ability to rank high in search and look great when shared on social media.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body4;

import React from 'react';

const Body2 = () => {
  return (
    <div className="bg-neutral-800 min-h-screen text-center px-4 py-16">
      <h1 className="text-white font-semibold text-3xl sm:text-4xl mb-10">
        How to use Notion as a website
      </h1>

      <div className="flex justify-center gap-8 md:gap-12 pt-8 flex-wrap">
 
        <div className="flex flex-col items-center text-left max-w-xs">
          <img src="step1.png" alt="step1" className="h-36 sm:h-40" />
          <p className="text-gray-400 mt-4">Step 1</p>
          <h2 className="text-white font-bold text-xl sm:text-2xl mt-2 text-center">
            Choose or create <br /> a Notion page
          </h2>
          <p className="text-gray-400 pt-3 text-center">
            Choose an existing Notion <br />
            page, create a new one or <br />
            start with a template. Super <br />
            works with any Notion page.
          </p>
        </div>

        <div className="flex flex-col items-center text-left max-w-xs">
          <img src="step2.png" alt="step2" className="h-36 sm:h-40" />
          <p className="text-gray-400 mt-4">Step 2</p>
          <h2 className="text-white font-bold text-xl sm:text-2xl mt-2 text-center">
            Paste the Notion <br /> page’s web link <br /> in Super
          </h2>
          <p className="text-gray-400 pt-3 text-center">
            Publish your Notion page <br />
            via the Share menu and <br />
            paste the Notion web link in <br />
            Super when creating a site.
          </p>
        </div>

        <div className="flex flex-col items-center text-left max-w-xs">
          <img src="step3.png" alt="step3" className="h-36 sm:h-40" />
          <p className="text-gray-400 mt-4">Step 3</p>
          <h2 className="text-white font-bold text-xl sm:text-2xl mt-2 text-center">
            Share your site <br /> with the world
          </h2>
          <p className="text-gray-400 pt-3 text-center">
            Your content is now live on <br />
            a site you can call your own! <br />
            Edits in Notion are <br />
            automatically synced.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body2;

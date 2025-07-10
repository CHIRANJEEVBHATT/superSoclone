import React from 'react';
import { FaInstagram, FaDiscord, FaYoutube, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">

      <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
       
        <div className="flex items-center gap-2">
          <img src="/superco.png" alt="Logo" className="h-6" />
        </div>

     
        <div className="flex gap-5 text-xl">
          <FaXTwitter className="cursor-pointer hover:text-gray-400" />
          <FaInstagram className="cursor-pointer hover:text-gray-400" />
          <FaDiscord className="cursor-pointer hover:text-gray-400" />
          <FaYoutube className="cursor-pointer hover:text-gray-400" />
        </div>
      </div>


      <div className="flex flex-wrap text-start gap-4 text-lg mt-8 px-8 text-gray-200">
        {[
          'Templates', 'Themes', 'Showcase', 'Blog', 'Guides', 'Docs',
          'Builder', 'Pricing', 'Notion Sites vs Super', 'Icons', 'Illustrations',
          'Create', 'Roadmap', 'Community', 'Affiliates — 30% commission',
          'Consulting', 'Report', 'Privacy', 'Terms'
        ].map((link, index) => (
          <span key={index} className="cursor-pointer hover:text-white">
            {link}
          </span>
        ))}
      </div>

     
      <p className="text-start text-gray-500 text-sm mt-7">
        © Super Publishing Co
      </p>
    </footer>
  );
};

export default Footer;

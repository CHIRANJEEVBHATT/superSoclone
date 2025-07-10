# Super.so Clone (Frontend Only)

This is a frontend-only clone of the website [Super.so](https://super.so), built using React and styled with Tailwind CSS. It is intended for practicing modern frontend development and creating a responsive, interactive UI without using any backend services.

---

## Live Website

Visit the deployed version of this project here:  
https://CHIRANJEEVBHATT.github.io/superoClone

---

## Features

- Sticky navigation header
- Section-based layout with reusable components
- Floating button at bottom-right corner
- Card-based testimonial section built using `.map()`
- Assets and images managed via the public folder
- Clean layout using Tailwind CSS utility classes
- Simple and clean UI structure

---

## Technologies Used

- React (via Create React App)
- Tailwind CSS
- GitHub Pages for deployment

---

## Folder Structure

superSoclone/
├── public/
│ └── notion.png, user images, logo, etc.
├── src/
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ ├── Body1.jsx
│ │ ├── Body2.jsx
│ │ ├── Body3.jsx
│ │ ├── Body4.jsx
│ │ └── ...
│ ├── App.js
│ └── index.js
├── tailwind.config.js
├── postcss.config.js
└── package.json



## Getting Started Locally

Follow the steps below to run this project locally:

1. Clone the repository

git clone https://github.com/CHIRANJEEVBHATT/superSoclone.git
cd superSoclone


2. Install all dependencies

npm install

3. Start the development server

npm start


This will launch the app at `http://localhost:3000`.

---

## GitHub Pages Deployment Guide

1. Add the following `homepage` in your `package.json` file:

```json
"homepage": "https://CHIRANJEEVBHATT.github.io/supersoClone"
Add these scripts in package.json:

"predeploy": "npm run build",
"deploy": "gh-pages -d build"
Install the gh-pages package:


npm install gh-pages --save-dev
Deploy the app:


npm run deploy
On GitHub, go to the repository → Settings → Pages
Set the source to the gh-pages branch and root folder.

Your site will now be live at:
https://CHIRANJEEVBHATT.github.io/supersoClone

Screenshot
You can add a screenshot of the project UI by placing an image (e.g. screenshot.png) inside the public folder and referencing it here:


![UI Screenshot](./public/screenshot.png)
License & Disclaimer
This project is made purely for learning and educational purposes. It is not affiliated with or endorsed by Super.so. All copyrights and trademarks belong to their respective owners.

Contact
If you want to suggest improvements or ask anything related to this project, feel free to raise an issue in the GitHub repository.



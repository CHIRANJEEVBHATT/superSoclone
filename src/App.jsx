
import { Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Body1 from './components/Body1'
import Body2 from './components/Body2'
import Body3 from './components/Body3'
import Body4 from './components/Body4'
import Footer from './components/Footer'

function App() {
  const testimonials = [
    {
      image: '/step1.png',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      comment:
        'Super is one of the fastest ways to create a website. Being built on top of Notion reduces friction and allows you to update the content on your website effortlessly.'
    },
    {
      image: '/step1.png',
      name: 'Bob Smith',
      email: 'bob@example.com',
      comment:
        'Super makes it dead simple to create beautiful websites with Notion powering your content. Simply update your Notion doc, and the changes appear live on your site like magic.'
    },
    {
      image: '/step1.png',
      name: 'Clara Lee',
      email: 'clara@example.com',
      comment:
        'I love that Super runs on Notion, where the rest of my life is. Making quick edits is a breeze using the Notion app on my phone.'
    },
 
    {
    image: '/step1.png',
    name: 'James',
    email: '@jmckinven',
    comment:
      'With Super, I can spin up quick, beautiful, effective websites in minutes! Bloody brilliant. I can make changes in seconds and it will be live on my site without me having to touch a thing.'
  },
  {
    image: '/step1.png',
    name: 'Yusuf',
    email: '@yusufgiftworks',
    comment:
      "With Super, editing content is a breeze because it's all in Notion, and you never have to worry about uptime, security, scaling... In other words, Super is a game-changer!"
  },
  {
    image: '/step1.png',
    name: 'Karl',
    email: '@ClemensWasner',
    comment:
      'Our non-profit was struggling for a long time to find a solution with the right balance between flexibility, aesthetics and ease of use. Being able to create a webpage, collections and sub-pages in seconds was a big game changer for us.'
  },
  {
    image: 'step1.png',
    name: 'Ernesto',
    email: '@emandowsky',
    comment:
      "Before Super, I struggled to even conceive the idea of having a website. Since then, I've generated leads for all sorts of offers and have created $10,000 in sales in my first month."
  },
  {
    image: 'step1.png',
    name: 'Callum',
    email: '@callumfackrell',
    comment:
      'The best applications on this planet are tools. Simple tools that do one job unbelievably well, and Super is one of those, it gives you the tools to make whatever fantastic projects your skills or imagination can create.'
  },
  {
    image: 'step1.png',
    name: 'Camille',
    email: '@CBlanchod',
    comment:
      "Since I work mostly in and around Notion, it's a pleasure to use Super to enhance the native features of Notion, and to be able to create simple, quick to edit and easy to maintain websites!"
  }
  ];

  return (
    <>
    <Header></Header>
    <Body1></Body1>
    <Body2></Body2>
    <Body3 testimonials={testimonials} />
    <Body4></Body4>
     <Footer></Footer>
    <button className="fixed bottom-6 left-6 bg-white text-gray-500 px-4 py-2 rounded-full shadow-lg">
    ⚡ Made with Super
</button>
     

    
  
      {/* <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/product' element={<Product />} />
      <Route path='/Contact' element={<Contact />} />
      </Routes> */}
    </>
  )
}

export default App

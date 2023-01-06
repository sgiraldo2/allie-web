import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Highlights from './components/highlights/Highlights';
import Project1 from './components/project1/Project1';
import Project2 from './components/project2/Project2';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Highlights />
      <Project1 href='#MyCarousels1' />
      <Project2 href='#MyCarousels2' />
      <Contact />
    </>
  );
}

export default App;

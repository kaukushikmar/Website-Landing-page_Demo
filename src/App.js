import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
//import Presentation from './Components/Presentation';
import aboutimage from './images/about.png';
import aboutimage1 from './images/about_1.png';
import Contact from './Components/Contact';

function App() {
  return (
    <div className='App'>
      <Header />
      <Feature />
      <About image={aboutimage} title='Comes with everything required' button='Get the app' />
      <About image={aboutimage1} title='Download and get the app now' button='Download' />
      <Contact />
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Qualification from './components/Qualification/Qualification';
import Work from './components/Work/Work';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Work/>
      <Testimonial/> 
      <Contact/> 
    </main>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import MainHeader from './components/Header/MainHeader/MainHeader';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import GameDemo from './components/GameDemo/GameDemo';
import About from './components/About/About';
import SectionWrapper from './components/SectionWrapper/SectionWrapper';
import Features from './components/Features/Features';
import Legal from './components/Legal/Legal';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import MobileNav from './components/MobileNav/MobileNav';

function App() {
  return (
   <>
   
  <Header/>
  <Hero/>
  <GameDemo/>
  <About/>
  <Features/>
  <Legal/>
  <Card/>
  <Footer/>
    <MobileNav/>
   </>
  );
}

export default App;

import './App.css';
import About from './Components/About/About';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Price from './Components/PriceSection/Price';
import ServiceCards from './Components/ServicesPage/ServiceCards';
import ServicesHeader from './Components/ServicesPage/ServicesHeader';
// import Container from './Container/Container';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ServicesHeader/>
      <ServiceCards/>
      <Price/>
      <About/>
    </>
  );
}

export default App;

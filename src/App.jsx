import Header from "./utils/components/Header/Header";
import Hero from "./utils/components/Hero/Hero";
import './App.css';
import Companies from "./utils/components/Companies/Companies";
import Residencial from "./utils/components/Residencial/Residencial";
import Testimonial from "./utils/components/Testimonial/Testimonial";
import  Contact  from "./utils/components/Contact/Contact";
import Commerical from "./utils/components/Commerical/Commerical"

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Residencial/>
      <Commerical/>
      <Testimonial/>
      <Contact/>
    </div>
  );
}

export default App;

import About from "./about/About";
import Body from "./body/Body";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Skills from "./skills/Skills";

function Portfolio() {
    return (
      <div>
       <Header/>
       <Body/>
       <About/>
       <Skills />
       <Contact />
       <Footer/>
      </div>
    );
  }
  
  export default Portfolio;
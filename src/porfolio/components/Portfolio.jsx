import About from "./about/About";
import Body from "./body/Body";
import Contact from "./contact/Contact";
import Education from "./education/Education";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

function Portfolio() {
    return (
      <div>
       <Header/>
       <Body/>
       <About/>
       <Education/>
       <Skills />
       <Projects/>
       <Contact />
       <Footer/>
      </div>
    );
  }
  
  export default Portfolio;
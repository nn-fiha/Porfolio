import About from "./experience/Experience";
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
       <Education/>
       <About/>
       <Skills />
       <Projects/>
       <Contact />
       <Footer/>
      </div>
    );
  }
  
  export default Portfolio;
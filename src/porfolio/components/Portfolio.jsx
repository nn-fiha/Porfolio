import About from "./about/About";
import Body from "./body/Body";
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
        <Footer/>
      </div>
    );
  }
  
  export default Portfolio;
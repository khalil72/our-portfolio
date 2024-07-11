import logo from './logo.svg';
import './App.css';
import { About, Contact, Footer, Header, HireMe, Projects, Resume, Services, Skill, Slider, } from './component';

function App() {
  return (
    <>
   <Header />
   <Slider />
   <About />
   <Resume />
    <Services />
    <Skill />
    <Projects />
    <HireMe />
    <Contact />
   <Footer />
   </>
  );
}

export default App;

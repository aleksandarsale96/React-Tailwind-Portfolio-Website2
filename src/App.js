import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Learning from "./components/Learning"

function App() {
  return (
    <div className="h-screen bg-[#0a192f]">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Learning />
      <Work />
      <Contact />
    </div>
  );
}

export default App;

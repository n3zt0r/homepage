import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import ContactBar from "./components/Contact/ContactBar";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen flex h-full">
        <div className="flex">
          <Navbar />
        </div>

        <div className="flex-1 w-full overflow-clip">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>

        <div className="flex overflow-clip shadow-xl">
          <ContactBar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

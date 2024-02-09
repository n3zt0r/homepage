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
      <div className="w-screen screen grid grid-cols-1 sm:grid-cols-[56px_1fr_56px]">
        <div className="z-50">
          <Navbar />
        </div>

        <div className="sm:min-h-screen min-h-[calc(100vh-56px-56px)] grid place-content-center bg-gray-200">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>

        <div className="shadow-xl z-50">
          <ContactBar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

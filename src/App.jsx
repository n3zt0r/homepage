import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ContactBar from "./components/Contact/ContactBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  const [isHidden, setHidden] = useState(true);

  return (
    <BrowserRouter>
      <div
        className={`${
          !isHidden && "h-screen min-h-fit overflow-hidden"
        } w-screen min-h-screen max-h-fit grid grid-cols-1 max-sm:grid-rows-[56px_1fr_56px] sm:grid-cols-[56px_1fr_56px]`}
      >
        <div className="z-50">
          <Navbar />
        </div>

        <div className="sm:min-h-fit min-h-[calc(100vh-56px-56px)] grid place-content-center bg-gray-200">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>

        <div className="shadow-xl z-50">
          <ContactBar isHidden={isHidden} setHidden={setHidden} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

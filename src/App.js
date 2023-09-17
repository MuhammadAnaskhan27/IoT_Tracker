import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import About from "../src/pages/AboutUs/About";
import Services from "../src/pages/Services/Services";
import Contact from "../src/pages/ContactUs/Contact";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

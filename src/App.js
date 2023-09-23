// app css component
import "./App.css";

//importing browser routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing pages
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
// app component

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="Projects" element={<Projects />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// app css component

import "./App.css";
//importing browser routes
import { BrowserRouter, Route, Routes } from "react-router-dom";

// importing pages
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

// app component

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="About">
            <About />
          </Route>
          <Route path="Projects">
            <Projects />
          </Route>
          <Route path="Contact">
            <Contact />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

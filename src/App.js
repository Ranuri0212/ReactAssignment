import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bulma/css/bulma.min.css";
import NavBar from "./common/NavBar";
import Home from "./screens/Home";
import AboutMe from "./screens/Aboutme";
import Skills from "./screens/Skills";
import Education from "./screens/Education";
import Contact from "./screens/Contact";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPortfolio from "./layout/LayoutPortfolio";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import Skills from "./pages/skills/Skills";
import Education from "./pages/education/Education";
import Interest from "./pages/interest/Interest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPortfolio />}>
          <Route path="/" element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="education" element={<Education />} />
          <Route path="interest" element={<Interest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

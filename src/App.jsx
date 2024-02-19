import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Scene1 } from "./components/Scene1";
import { Scene2 } from "./components/Scene2";
import { Scene3 } from "./components/Scene3";
import { Scene4 } from "./components/Scene4";
import { Scene5 } from "./components/Scene5";
import { Scene6 } from "./components/Scene6";
import { Scene7 } from "./components/Scene7";
import { Scene8 } from "./components/Scene8";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Form } from "./components/Form";
import Landing from "./components/Landing/Landing";

import "../src/css/main.css";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/scene1" element={<Scene1 />} />
          <Route exact path="/scene2" element={<Scene2 />} />
          <Route exact path="/scene3" element={<Scene3 />} />
          <Route exact path="/scene4" element={<Scene4 />} />
          <Route exact path="/scene5" element={<Scene5 />} />
          <Route exact path="/scene6" element={<Scene6 />} />
          <Route exact path="/scene7" element={<Scene7 />} />
          <Route exact path="/scene8" element={<Scene8 />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/form" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

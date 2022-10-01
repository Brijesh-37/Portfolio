import "./App.css";
import ToolBar from "./components/Navbar.js";
import AboutMe from "./components/AboutMe";
import Project from "./components/project";

function App() {
  return (
    <div>
      <ToolBar />
      <AboutMe />
      <Project />
    </div>
  );
}

export default App;

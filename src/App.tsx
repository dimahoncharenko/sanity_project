// Imports libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Imports pages
import { Post } from "./pages/Post";
import { Home } from "./pages";
import { About } from "./pages/About";
import { Project } from "./pages/Project";
import { SinglePost } from "./pages/SinglePost";

// Imports components
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/post/:slug" element={<SinglePost />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

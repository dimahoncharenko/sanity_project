// Imports libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Imports pages
import { Posts } from "./pages/Posts";
import { Home } from "./pages";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { SinglePost } from "./pages/SinglePost";

// Imports components
import { NavBar } from "./components/NavBar";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/posts/:slug" element={<SinglePost />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/error-page" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

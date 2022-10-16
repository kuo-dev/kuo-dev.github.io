import "./App.css";
import HamburgerMenu from "./components/HamburgerMenu";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Blog from "./Pages/Blog/Blog";
import ErrPage from "./Pages/ErrPage"
function App() {
  return (
    <div className="app">
      <Router>
        <HamburgerMenu />
        
        <div className="pages">
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="*" element={<ErrPage/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

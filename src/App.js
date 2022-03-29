
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './Pages/Home'
import Trending from './Pages/Trending'


//use 3 endpoints from Giphy API
//random,trending,search?
function App() {
  return (
    <Router>
      <nav>
        <link to=""></link>
        <link to=""></link>
        <link to=""></link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="" />
        <Route path="" />
      </Routes>
    </Router>
  );
}

export default App;

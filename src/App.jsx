import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./shares/componentes/header";
import Navbar from "./shares/componentes/navbar";
import Home from "./feature/home/page/home";
import AboutSba from "./feature/aboutSba/pages/about";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-sba" element={<AboutSba />} />
      </Routes>
    </Router>
  );
}

export default App;

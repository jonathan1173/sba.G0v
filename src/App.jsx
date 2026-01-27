import Navbar from "./shares/componentes/navbar";
import Home from "./feature/home/page/home";
import AboutSba from "./feature/aboutSba/pages/about";
import Footer from "./feature/home/components/PreFooter";
import FooterBar from "./feature/home/components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/xx" element={<AboutSba />} />
      </Routes>
      <Footer/>
      <FooterBar/>
    </Router>
  );
}

export default App;
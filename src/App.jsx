import Navbar from "./shares/componentes/navbar";
import Home from "./feature/home/page/home";
import AboutSba from "./feature/aboutSba/pages/about";
import Footer from "./feature/home/components/PreFooter";
import FooterBar from "./feature/home/components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// 1. Asegúrate de importar desde "/react"
import { Analytics } from "@vercel/analytics/react"; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organization/sba-leadership" element={<AboutSba />} />
      </Routes>
      <Footer/>
      <FooterBar/>
      
      {/* 2. Colócalo aquí, al final de todo pero dentro del Router */}
      <Analytics />
    </Router>
  );
}

export default App;
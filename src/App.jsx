import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./shares/componentes/header";
import Navbar from "./shares/componentes/navbar";
import Home from "./feature/home/page/home";
import AboutSba from "./feature/aboutSba/pages/about";
import Footer from "./feature/home/components/PreFooter";
import FooterBar from "./feature/home/components/footer";
function App() {

  return (
    <Router>
      //<Navbar />
      <Routes>
        <Route path="No" element={<Home />} />
        <Route path="Noo" element={<AboutSba />} />
      </Routes>
        //<Footer/>
      //<FooterBar/>
    </Router>
  );
}

export default App;

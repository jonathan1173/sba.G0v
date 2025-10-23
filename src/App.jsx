import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./shares/componentes/header";
import Navbar from "./shares/componentes/navbar";
import Home from "./feature/home/page/home";
import useFakeDomain from "./shares/hooks/useFakeDomain";

function App() {

  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

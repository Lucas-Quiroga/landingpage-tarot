import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/navbar/Navbar";
import Main from "./components/main/Main";
import Servicios from "./components/servicios/Servicios";
import Información from "./components/información/Información";
import Contacto from "./components/contacto/Contacto";
import SobreMi from "./components/paula/SobreMi";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/informacion" element={<Información />} />
          <Route path="/informacion/:serviceId" element={<Información />} />

          <Route path="/contacto" element={<Contacto />} />
          <Route path="/SobreMi" element={<SobreMi />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

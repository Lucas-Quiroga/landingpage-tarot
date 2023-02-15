import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CursosContainer from "./components/cursosContainer/CursosContainer";
import Footer from "./components/footer/Footer";
import Product from "./mercadopago/MercadoPagoReact";
import Contacto from "./components/contacto/Contacto";
import SobreMi from "./components/paula/SobreMi";
import CursosContainerInfo from "./components/cursosContainerInfo/CursosContainerInfo";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/servicios" element={<ItemListContainer />} />
        <Route path="/servicios/:serviceId" element={<ItemDetailContainer />} />
        <Route path="/cursos" element={<CursosContainer />} />
        <Route path="/cursos/:cursosId" element={<CursosContainerInfo />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/SobreMi" element={<SobreMi />} />
        {/* <Route path="/mercadopago" element={<Product />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

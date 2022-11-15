import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={"home"} />
        <Route path="/servicios" element={<ItemListContainer />} />
        <Route path="/servicios/:serviceId" element={<ItemDetailContainer />} />
        <Route path="/cursos" element="curso" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

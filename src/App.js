import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={"home"} />
        <Route path="/servicios" element={<ItemListContainer />} />
        <Route path="/servicios/:serviceId" element="servicio" />
        <Route path="/cursos" element="curso" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

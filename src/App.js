import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ItemDetailContainer />
      <Routes>
        <Route path="/" element={"home"} />
        <Route path="/servicios" element={<ItemListContainer />} />
        <Route path="/servicios/:serviceId" element={"services"} />
        <Route path="/cursos" element="curso" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element="home" />
        <Route path="/servicios" element="servicios" />
        <Route path="/servicios/:serviceId" element="servicio" />
        <Route path="/videoscurso" element="videoscurso" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

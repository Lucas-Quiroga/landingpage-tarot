import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element="home" />
        <Route path="/servicios" element="servicios" />
        <Route path="/servicios/:serviceId" element="servicio" />
        <Route path="/videoscurso" element="videoscurso" />
        <div class="parent">
          <div class="div1"> NAVBAR </div>
          <div class="div2"> LANDING </div>
          <div class="div3"> FOOTER </div>
        </div>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

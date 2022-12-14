import React from "react";
import CursosCards from "./cursosCards/CursosCards";

const CursosMap = ({ cursos }) => {
  return (
    <div>
      {cursos.map((resp) => (
        <CursosCards key={resp.id} cursos={resp} />
      ))}
    </div>
  );
};

export default CursosMap;

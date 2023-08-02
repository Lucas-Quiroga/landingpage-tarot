import React from "react";
import CursosCards from "./cursosCards/CursosCards";

const CursosMap = ({ cursos }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "8rem",
        margin: "auto",
        padding: "2rem",
      }}
    >
      {cursos.map((resp) => (
        <CursosCards key={resp.id} cursos={resp} />
      ))}
    </div>
  );
};

export default CursosMap;

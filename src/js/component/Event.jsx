import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
// El tema de los eventos

// Que son los eventos:
// Los eventos es cualquier interaccion que hay entre
// El usuario y nuestra pagina web.

// onClick -> cuando un usuario clickea en nuestra pagina

// Se limita a inputs
// onChange -> Cuando ocurre un cambio en el input
// (event): Del evento podemos extraer una serie de valores o informacion
// relacionada al contexto donde se detecto el evento
// event.target

const Event = () => {
  const estudiantes = [
    "Jorge", // 0
    "Jose", // 1
    "Luis", // 2
    "Ivan",
    "Angie",
    "Omar",
    "Valentina",
    "Etc",
    "ArJuan",
  ];
  // El metodo filter busca dentro de un arreglo
  // aquellos elementos que cumplan una condicion

  // y retorna un arreglo nuevo con ellos

  // map((elemento, indice, arregloComoTal))
  const estudiantesConJ = estudiantes.filter((estudiante, indice) =>
    estudiante.includes("J")
  );
  // taskList.filter((elemento, i)) -> i !== index
  console.log(estudiantesConJ);
  return (
    <div>
      <button onClick={() => console.log("Hola que tal")}>Saluda</button>

      <input onChange={(event) => console.log(event.target.value)} />
      <select onChange={(event) => console.log(event.target.value)}>
        <option value="Caracas">Caracas</option>
        <option value="Maturin">Maturin</option>
        <option value="Merida">Merida</option>
        <option value="Maracaibo">Maracaibo</option>
      </select>

      <input onKeyDown={(event) => console.log(event.key == "Enter")} />

      <input
        type="color"
        onChange={(event) => console.log(event.target.value)}
      />
    </div>
  );
};

export default Event;

import React, { useState, useEffect } from "react";
import Counter from "./Contador";
// useEffect: Para efectos secundarios

// Se va a ejecutar con cada renderizado
// useEffect(() => {
//   console.log("Me renderizo");
// });

// Con el arreglo de dependencias vacias se ejecuta una sola vez
// useEffect(() => {
//   // a parte del bloque de funcion
//   console.log("Personajes cambiados");
// }, []); // un arreglo vacio

// Cuando se incluye un valor en el arreglo de dependencias
// El useEffect se re ejecuta cada vez que un valor
// De ese arreglo se modifique
// useEffect(() => {
//   // a parte del bloque de funcion
//   console.log("Estado cambiado");
// }, [state]);

function Home() {
  let [personajes, setPersonajes] = useState([]);

  async function getCharacters() {
    try {
      // Intenta ejecutar este bloque
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setPersonajes([...data.results]);
      return data;
    } catch (e) {
      // Si fallas cae aca
      console.log(e);
    }
  }

  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <>
      <Counter />
      {/* <button onClick={() => getCharacters()}>
        Busca informacion de rick y morty
      </button> */}
      <div className="container row">
        {personajes.map((personaje) => {
          return (
            <div className="p-1 col-6" key={personaje.id}>
              <div className="card">
                <img src={personaje.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{personaje.name}</h5>
                  <ul>
                    <li>Status: {personaje.status}</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;

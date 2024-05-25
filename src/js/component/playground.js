// .then() -> Se ejecuta cuando la promesa se cumple
// .catch() -> Se ejecuta cuando la promesa se rechaza

// Buscar informacion de los personajes en la api de rick y morty

// Viene en un formato de comunicacion entre servidores
// Tenemos que explicitamente extraer la data de json(Javascript Object Notation)
fetch("https://rickandmortyapi.com/api/character")
  .then((result) => result.json()) // La api que uso me devuelve JSON
  .then((data) => data)
  .catch((error) => console.log(error));

// Callback Hell

// Asincronismo
// En una funcion

// Este es el estandar de la industria actualmente
async function getCharacters() {
  try {
    // Intenta ejecutar este bloque
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return data;
  } catch (e) {
    // Si fallas cae aca
    console.log(e);
  }
}

getCharacters();

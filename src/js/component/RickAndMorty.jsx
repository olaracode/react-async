import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
// useEffect -> para cargar cosas asincronas
const RickAndMorty = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [randomCharacter, setRandomCharacter] = useState({});
  const [episodes, setEpisodes] = useState([]);

  const [loading, setLoading] = useState(false);

  // asincronismo async/await/fetch
  async function getCharacters() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const characters = await response.json(); // lo convertimos en JS
    console.log(characters.results);
    console.log(characters);
    setCharactersData(characters.results);
  }

  async function getRandomCharacter() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const characters = await response.json();

    console.log("Characters:", characters);
    const randomIndex = Math.floor(Math.random() * characters.results.length);
    console.log("Personaje aleatorio", characters.results[randomIndex]);
    // console.log(characters);
    setRandomCharacter(characters.results[randomIndex]);
  }

  async function getEpisodes() {
    try {
      setLoading(true);

      const response = await fetch("https://rickandmortyapi.com/api/episode");
      if (response.status === 200) {
        const episode = await response.json();
        console.log("Episodes:", episode.results);
        setEpisodes(episode.results);

        setLoading(false);
      }
      if (response.ok) {
        // mi logica positiva
      }
    } catch (error) {
      console.log(error);
    }
  }

  // window.onload
  // useEffect van justo antes del return
  // useEffect(() => {}, [])
  // useEffect se ejecuta antes de todo el return
  useEffect(() => {
    // una funcion flecha
    getCharacters();
    getEpisodes();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-center mt-5">React-Asincrono!</h1>
      <div className="my-3">
        <button
          className="btn btn-warning"
          onClick={() => getRandomCharacter()}
        >
          Traer personaje aleatorio
        </button>
        <p>Personaje aleatorio</p>
        <p>{randomCharacter.name}</p>
        <p>{randomCharacter.species}</p>
      </div>
      {charactersData.length === 0 ? (
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          <h2>Personajes</h2>
          {charactersData.map((character) => {
            return <div key={character.id}>{character.name}</div>;
          })}
        </>
      )}

      <h2>Episodios</h2>
      <div>
        {episodes.map((episode) => {
          return (
            <div key={episode.id}>
              {episode.name}/{episode.episode}
            </div>
          );
        })}
      </div>
      <p>
        Made by <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
        love!
      </p>
    </div>
  );
};

export default RickAndMorty;

import React, { useState, useEffect } from "react";

// () => funcion flecha
// return implicito
// setState(Array.filter((element) => element % 2 == 0)) // condicion es verdadera incluyo elemento a un arreglo nuevo
// setState([...Array, nuevoElemento])
// spreadOperator -> Arreglos y Objetos. Deestructura todo el elemento, se suele usar para copiar
// {} -> un bloque de codigo
// {} -> Objeto { nombre: "Gustavo", "apellido": "Patiño" }

// asincronismo: Ejecucion de codigo en segundo plano mientras se resuelve una peticion

// fetch API: es una funcion nativa de javascript que nos permite
//            buscar informacion de un servidor x
//            4 o mas Metodos
//            GET | POST | PUT | DELETE | PATCH | ........
//            GET: Nos permite buscar informacion
//            POST: Nos permite enviar informacion -> Suele usarse para crear
//            PUT | PATCH: Nos permite actualizar data
//            DELETE: Se usa para borrar data del servidor

// useEffect:
//              Se ejecuta al cargar la pagina/el componente
//
//              Si no tiene dependencias Se ejecuta cada vez que
//              la data se actualice
//
//              Si si tiene dependencias Se ejecuta cada vez que las dependencias
//              Cambien
//
//              Si tiene dependencias pero estan vacias se ejecuta una unica vez

// fetch().then().catch()
// fetch -> Asincrono | Nuestra funcion tiene que ser asincrona

// Vamos a utilizar la api de JSONPlaceholder
// 1. Probar la api [DONE] POSTS
// 2. Crear una funcion para usar la api
// 3. Ejecutarla y renderizar los elementos

// POST
// 1. Agregar los campos(inputs) necesarios [DONE?]
// 2. Agregar un boton para *agregar* un Post [DONE]
// 3. Crear un estado que maneje los inputs
// 4. Crear una funcion asincrona que envie la informacion al servidor( Yo ayudo :) )
const home = () => {
    const [info, setInfo] = useState([]);
    const [data, setData] = useState({
        title: "",
        body: "",
        userId: 1
    })

    // una funcion que maneje el evento change []
    // atar los valores del estado a el input [Jorge]

    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data), // JSON.stringify() JS -> STRING 
            headers: {
                'Content-type': 'application/json'
            }
        })
        if (response.ok) {
            const postData = await response.json();
            console.log(postData)
        } else {
            alert("No se pudo crear :(")
        }
        // Metodo post de quien

    }

    async function getInfo() {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const infoData = await response.json(); // JavaScript Object Notation
            setInfo(infoData);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getInfo();
    }, []);
    return (
        <div className="container">
            <form onSubmit={(event) => handleSubmit(event)}>
                <div>
                    <label htmlFor="">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={data.title}
                        name="title"
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <label>Body</label>
                    <input
                        type="text"
                        className="form-control"
                        name="body"
                        value={data.body}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <button className="btn btn-primary mt-2">
                    Crear
                </button>
            </form>
            <div className="d-flex flex-column gap-3 mt-2">
                {info.map((element) => {
                    return (
                        <div className="card" key={element.id}>
                            <div className="card-body">
                                <h2 className="card-title">{element.title}</h2>
                                <p>{element.body}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default home;

// Crear nuestro usuario -> Puede ser desde thunder client
// Borrar nuestro usuario -> Puede ser desde thunder client
// 


// Cesar
// Cristobal
// Valentina
// Fabricio

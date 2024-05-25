import React, { useState, useEffect } from "react";

function Contador() {
  const [counter, setCounter] = useState(0);
  const [counterDos, setCounterDos] = useState(0);
  useEffect(() => {
    console.log("Me ejecuto una vez");
  }, []);

  useEffect(() => {
    console.log("Me ejecuto cada vez");
  });

  useEffect(() => {
    console.log("Me ejecuto cuando counter 1 cambia");
    console.log(counter);
  }, [counter]);

  useEffect(() => {
    console.log("Me ejecuto cuando counter Dos cambia");
    console.log(counterDos);
  }, [counterDos]);
  return (
    <div className="my-5">
      <div>
        <button onClick={() => setCounter(counter + 1)}>Agregar</button>
        <>{counter}</>
        <button onClick={() => setCounter(counter - 1)}>Restar</button>
      </div>
      <div>
        <div className="my-5">
          <button onClick={() => setCounterDos(counterDos + 1)}>Agregar</button>
          <>{counterDos}</>
          <button onClick={() => setCounterDos(counterDos - 1)}>Restar</button>
        </div>
      </div>
    </div>
  );
}

export default Contador;

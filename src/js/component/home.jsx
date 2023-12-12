import React, { useState } from "react";
import RickAndMorty from "./RickAndMorty";
import Post from "./Post";

// El metodo post se utiliza solo para crear el usuario

const Home = () => {
  const [isShowing, setIsShowing] = useState("rick");
  const setPost = () => setIsShowing("post");
  const setRick = () => setIsShowing("rick");

  return (
    <div>
      <div className="d-flex my-5 container justify-content-between">
        <button
          onClick={setRick}
          className={`btn btn-primary ${isShowing === "rick" && "active"}`}
        >
          Ver Rick y morty
        </button>
        <button
          className={`btn btn-primary ${isShowing === "post" && "active"}`}
          onClick={setPost}
        >
          Ver Post
        </button>
      </div>
      {isShowing === "rick" && <RickAndMorty />}
      {isShowing === "post" && <Post />}
    </div>
  );
};

export default Home;

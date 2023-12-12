import React, { useState } from "react";

const initialState = {
  body: "",
  title: "",
};

const endpoint = "https://jsonplaceholder.typicode.com/posts";
const Post = () => {
  const [socialMediaPost, setSocialMediaPost] = useState(initialState);

  const handleSocialMediaPost = (event) => {
    // como podria actualizar el socialMediaPost con el evento
    setSocialMediaPost({
      ...socialMediaPost,
      [event.target.name]: event.target.value,
    });
  };
  // JSON VS Javascript -> {"title": "un titulo"} | {"title": "un title"}
  const createSocialMediaPost = async () => {
    const response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(socialMediaPost),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
  };

  const handleSubmit = (event) => {
    // preventDefault() -> Evita que recargue la pagina
    event.preventDefault();
    console.log(socialMediaPost);
    createSocialMediaPost();
  };
  return (
    <div className="container">
      <div className="card">
        <form onSubmit={handleSubmit} className="card-body">
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              onChange={(event) => handleSocialMediaPost(event)}
            />
          </div>
          <div>
            <label>Body</label>
            <input
              type="text"
              name="body"
              className="form-control"
              onChange={(event) => handleSocialMediaPost(event)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;

import React, { useState } from "react";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const posts = [
    {
      title: "Aprendiendo ReactJS",
      content: "Una de las tecnologías con mayor demanda en el mercado",
    },
    {
      title: "Aprendiendo Angular",
      content: "Una de las tecnologías con mayor demanda en el mercado",
    },
    {
      title: "Aprendiendo VueJS",
      content: "Una de las tecnologías con mayor demanda en el mercado",
    },
    {
      title: "Aprendiendo NextJS",
      content: "Una de las tecnologías con mayor demanda en el mercado",
    },
    {
      title: "Aprendiendo NestJS",
      content: "Una de las tecnologías con mayor demanda en el mercado",
    },
    {
      title: "Aprendiendo Spring Boot",
      content: "Una de las tecnologías con mayor demanda en el mercado",
    },
  ];
  return (
    <div className={darkMode ? "wrapper-dark" : "wrapper-light"}>
      <div className="container">
        <div className="logo">
          <div>
            <h1>Hola, soy Sebastian</h1>
            <p>Bienvenidos a mi blog!</p>
          </div>
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="btn"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
      <div className="hero">
        <h3>Lo mejor de la tecnología</h3>
        <p className={darkMode ? "cto-dark" : "cto-light"}>Lo encontrás acá</p>
      </div>
      <div className="container posts-container">
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            <p className="post-title">{post.title}</p>
            <p className="post-content">{post.content}</p>
          </div>
        ))}
      </div>
      <footer className="footer">
        Hola, soy Sebastian | Todos los derechos reservados
      </footer>
    </div>
  );
}

export default App;

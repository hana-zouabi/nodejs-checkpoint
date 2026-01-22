import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MovieDetails from "./MovieDetails";

const movies = [
  {
    id: 1,
    title: "Inception",
    posterURL: "https://via.placeholder.com/200x300?text=Inception",
    description: "Un voleur qui s'introduit dans les rêves des autres.",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc",
  },
  {
    id: 2,
    title: "Interstellar",
    posterURL: "https://via.placeholder.com/200x300?text=Interstellar",
    description: "Une aventure spatiale pour sauver l'humanité.",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    id: 3,
    title: "The Matrix",
    posterURL: "https://via.placeholder.com/200x300?text=The+Matrix",
    description: "Un monde virtuel contrôlé par des machines.",
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "10px",
          width: "200px",
        }}
      >
        <img
          src={movie.posterURL}
          alt={movie.title}
          style={{ width: "100%" }}
        />
        <h3>{movie.title}</h3>
      </div>
    </Link>
  );
}

export default MovieCard;

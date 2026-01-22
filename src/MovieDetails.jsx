import React from "react";
import { useParams, Link } from "react-router-dom";

function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <h2>Film introuvable</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="Trailer"
        allowFullScreen
      ></iframe>
      <br />
      <br />
      <Link to="/">⬅ Retour à l'accueil</Link>
    </div>
  );
}

export default MovieDetails;

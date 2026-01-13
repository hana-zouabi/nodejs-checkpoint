import React, { useState } from "react";

// Composant MovieCard
const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "200px",
      }}
    >
      <img src={movie.posterURL} alt={movie.title} style={{ width: "100%" }} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>⭐ {movie.rating}/5</p>
    </div>
  );
};

// Composant MovieList
const MovieList = ({ movies }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

// Composant Filter
const Filter = ({ setTitleFilter, setRatingFilter }) => {
  return (
    <div style={{ margin: "20px 0" }}>
      <input
        type="text"
        placeholder="Filtrer par titre..."
        onChange={(e) => setTitleFilter(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="number"
        min="0"
        max="5"
        placeholder="Filtrer par note..."
        onChange={(e) => setRatingFilter(e.target.value)}
      />
    </div>
  );
};

// Composant AddMovieForm
const AddMovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !posterURL || !rating) return;
    addMovie({ title, description, posterURL, rating: Number(rating) });
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="text"
        placeholder="URL de l'affiche"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="number"
        min="0"
        max="5"
        placeholder="Note"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

// Composant principal App
const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Un voleur de rêves",
      posterURL: "https://m.media-amazon.com/images/I/51s+Ff1kB6L._AC_.jpg",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "Voyage dans l'espace",
      posterURL:
        "https://m.media-amazon.com/images/I/71n9C+MC7NL._AC_SY679_.jpg",
      rating: 4,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  const addMovie = (movie) => setMovies([...movies, movie]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ma Liste de Films</h1>
      <AddMovieForm addMovie={addMovie} />
      <Filter
        setTitleFilter={setTitleFilter}
        setRatingFilter={setRatingFilter}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;

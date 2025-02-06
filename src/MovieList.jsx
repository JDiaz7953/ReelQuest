import { useEffect, useState } from "react";

const apiKey = "ca1341f1a00f6ae883587400121ed733";

const MovieList = ({ page, searchQuery }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let url;
    if (searchQuery) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(searchQuery)}&page=${page}`;
    } else {
      url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`;
    }

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.results);
      });
  });

  return (
    <>
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="bg-gray-700 hover:cursor-pointer text-white p-4 m-4 rounded-lg hover:shadow-2xl w-[90vw] "
        >
          <div className="flex ">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="pictures of movie"
              className="w-40 "
            />
            <div className="m-4 ">
              <h3 className="text-3xl">{movie.original_title}</h3>
              <p className="mt-3">Release Date: {movie.release_date}</p>
              <p className="mt-3">
                {" "}
                Rating: {movie.vote_average.toFixed(1)}/10
              </p>
              <p className="mt-3">{movie.overview}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default MovieList;

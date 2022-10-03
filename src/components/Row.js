import axios from "../axios";
import React, { useState, useEffect } from "react";
import "./row.css";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    try {
      const fetchMovies = async () => {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results);
      };
      fetchMovies();
    } catch (err) {
      console.log("err", err);
    }
  }, [fetchUrl]);

  console.log("movies", movies);
  return (
    <div className="ml-5">
      <h1 className="text-white text-2xl">{title}</h1>
      <div className="flex overflow-y-hidden overflow-x-scroll p-5 image">
        {movies.map((movie) => {
          return (
            <>
              <img
                key={movie.id}
                className={`${
                  isLargeRow
                    ? "max-h-64 rowImage mr-4"
                    : "max-h-28 object-contain mr-4 rowImage"
                }`}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Row;

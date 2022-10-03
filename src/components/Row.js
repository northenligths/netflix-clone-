import axios from "../axios";
import React, { useState, useEffect } from "react";
import "./row.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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

  return (
    <div className="ml-5">
      <h1 className="text-white text-2xl">{title}</h1>
      <Carousel responsive={responsive} infinite={true}>
        <div className="flex overflow-x-scroll p-5 image">
          {movies.map((movie) => {
            return (
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && ( //for preventing dead images link in the UI
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
              )
            );
          })}
        </div>
      </Carousel>
    </div>
  );
};

export default Row;

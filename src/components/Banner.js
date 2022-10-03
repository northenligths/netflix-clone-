import axios from "../axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    try {
      const fetchMovie = async () => {
        const response = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length - 1) //to return a single random movie everyTime page refreshes
          ]
        );
      };
      fetchMovie();
    } catch (err) {
      console.log("err", err);
    }
  }, []);

  console.log("movies", movie);
  return (
    <header
      className="bg-black pt-20"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="px-6">
        <h1 className=" relative text-[50px] sm:text-[90px] md:text-[90px] font-bold text-white">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="buttons flex space-x-4 text-white">
          <button className="py-2 px-6 bg-slate-800">Play</button>
          <button className="py-2 px-6 bg-slate-800">My List</button>
        </div>
        <p className="text-white pt-4 pb-32">
          {movie?.overview?.slice(0, 150)}
        </p>
      </div>
    </header>
  );
};

export default Banner;

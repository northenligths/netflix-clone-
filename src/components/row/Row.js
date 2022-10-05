import axios from "../../axios";
import React, { useState, useEffect } from "react";
import "./row.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

  return (
    <div className="ml-5">
      <h1 className="text-white text-2xl">{title}</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 10,
            slidesToSlide: 3,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 4,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        partialVisbile={false}
        swipeable
      >
        {movies.map((movie) => {
          return (
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && ( //for preventing dead images link in the UI
              <>
                <img
                  key={movie.id}
                  className={`${
                    isLargeRow ? "max-h-64 rowImage" : "max-h-28 rowImage"
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
      </Carousel>
    </div>
  );
};

export default Row;

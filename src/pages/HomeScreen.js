import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Row from "../components/row/Row";
import requests from "../Requests";

const HomeScreen = () => {
  return (
    <div>
      <Navbar fixed={"fixed"} />
      <Banner />
      <Row
        title=" NETFLIX ORIGINALS "
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title=" Trending Now " fetchUrl={requests.fetchTrending} />
      <Row title=" Top Rated " fetchUrl={requests.fetchTopRated} />
      <Row title=" Action Movies " fetchUrl={requests.fetchActionMovies} />
      <Row title=" Comedy Movies " fetchUrl={requests.fetchComedyMovies} />
      <Row title=" Horror Movies " fetchUrl={requests.fetchHorrorMovies} />
      <Row title=" Romance Movies " fetchUrl={requests.fetchRomanceMovies} />
      <Row title=" Documentaries " fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;

import React, { useEffect, useState } from "react";
import Cards from "../pages/Cards";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [sortType, setSortType] = useState("rating"); // Default: Sort by rating

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  // Sorting function
  const sortedMovies = [...movies].sort((a, b) => {
    if (sortType === "rating") return b.vote_average - a.vote_average; // High to Low
    if (sortType === "release_date") return new Date(b.release_date) - new Date(a.release_date); // New to Old
    if (sortType === "title") return a.title.localeCompare(b.title); // A-Z
  });

  return (
    <div className="pt-10 p-14 ">
      <h1 className="font-bold">IMDB Charts</h1>
      <h2 className="text-4xl font-semibold">
        <span className="text-yellow-300">|</span> IMDB Top 250 Movies
      </h2>
      <p className="font-light text-gray-600">As rated by regular IMDB voters</p>

      {/* Sorting Dropdown */}
      <select onChange={(e) => setSortType(e.target.value)} className="p-2 border items-end rounded-md my-4">
        <option value="rating">Sort by Rating</option>
        <option value="release_date">Sort by Release Date</option>
        <option value="title">Sort by Title</option>
      </select>

      {/* Pass Sorted Movies to Cards Component */}
      <Cards movies={sortedMovies} />
    </div>
  );
};

export default Home;

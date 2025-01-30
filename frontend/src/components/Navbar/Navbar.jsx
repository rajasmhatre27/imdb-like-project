import React, { useState } from "react";

const Navbar = () => {
  // State for the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Handle Search Input Change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);  // Update the state with the current search query
  };

  // Handle Search Button Click
  const handleSearchSubmit = () => {
    if (searchQuery.trim() === "") {
      alert("Please enter a search term.");
      return;
    }
    // Simulate an API search query (you can replace this with an actual API call)
    console.log(`Searching for: ${searchQuery}`);
    // Call your search API here, e.g., fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}`)
  };

  return (
    <nav className="bg-gray-900 text-white py-3 px-6 flex items-center justify-between">
      {/* Left Section: IMDb Logo */}
      <div className="flex items-center space-x-3">
        {/* IMDb Logo: You can replace the text with an actual logo */}
        <div className="bg-yellow-500 text-black font-bold px-3 py-1 text-xl rounded-md">
          IMDb
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li className="hover:text-yellow-500 cursor-pointer">Movies</li>
          <li className="hover:text-yellow-500 cursor-pointer">TV Shows</li>
          <li className="hover:text-yellow-500 cursor-pointer">Celebs</li>
        </ul>
      </div>

      {/* Middle Section: Search Bar */}
      <div className="flex flex-grow max-w-lg items-center bg-gray-800 px-3 py-1 rounded-md">
        <input
          type="text"
          placeholder="Search IMDb"
          className="w-full bg-transparent outline-none text-white placeholder-gray-400 px-2"
          value={searchQuery}
          onChange={handleSearchChange}  // Update the state when user types
        />
        <button 
          className="text-yellow-500" 
          onClick={handleSearchSubmit}  // Trigger the search action
        >
          🔍
        </button>
      </div>

      {/* Right Section: Sign In */}
      <div>
        <button className="bg-yellow-500 text-black px-4 py-1 rounded-md font-semibold hover:bg-yellow-600">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

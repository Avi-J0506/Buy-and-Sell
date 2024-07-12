import React, { useState } from "react";
import searchIcon from "../assets/search.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const userName = "Abhinandan Jha";

  const userInitial = userName.charAt(0);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for: ", searchQuery);
  };

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg text-white font-semibold">Buy&Sell</div>
          {/* <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-white">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-white">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-white">
              Home
            </a>
          </div> */}
          <div className="flex items-center space-x-2">
            <form onSubmit={handleSearchSubmit} className="flex">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="p-2 rounded-l-md border border-gray-400"
                placeholder="Search"
              />
              <button
                type="submit"
                className="bg-green-500 p-2 rounded-r-md hover:bg-blue-600"
              >
                <img src={searchIcon} alt="Search" className="h-4 w-4" />
              </button>
            </form>
          </div>
          <Link to="/profile">
            <div className="ml-4">
              <button className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold border-2 border-gray-600 focus:outline-none focus:border-white">
                {userInitial}
              </button>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

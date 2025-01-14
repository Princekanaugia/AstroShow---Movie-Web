import React from "react";
import { Link, NavLink } from "react-router-dom";

const SideNav = ({ isSidebarOpen }) => {
  return (
    <div
      className={`fixed bg-[#1F1E24] z-50 inset-y-0 left-0 w-[60%] sm:w-[20%] bg-[#1F1E2] border-r-4 border-[#363636] p-10 transform 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300  bg-[]`}
    >
      <h1 className="text-white text-2xl font-bold">
        <Link to={"/"}>
          <i className=" text-[#6556CD] ri-tv-fill mr-2 text-3xl"></i>
        </Link>
        <span className="text-2xl">AstroShow</span>
      </h1>

      <nav className="flex flex-col text-zinc-400 text-xl gap-1 x z-50">
        <h1 className="text-white font-semibold mt-10 mb-5 ">New Feeds</h1>

        <Link
          to="/"
          className="hover:bg-[#6556CD] hover:text-white p-4 duration-300 rounded-lg  mr-2"
        >
          <i className="ri-home-2-line mr-2"></i>Home
        </Link>
        <Link
          to="/trending"
          className="hover:bg-[#6556CD] hover:text-white p-4 duration-300 rounded-lg  mr-2"
        >
          <i className="ri-fire-line mr-2"></i>Trending
        </Link>
        <Link
          to="/movie"
          className="hover:bg-[#6556CD] hover:text-white p-4 duration-300 rounded-lg mt-2 mr-2"
        >
          <i className="ri-movie-2-line mr-2"></i>Movies
        </Link>
        <Link
          to="/tv"
          className="hover:bg-[#6556CD] hover:text-white p-4 duration-300 rounded-lg mt-2 mr-2"
        >
          <i className="ri-tv-line mr-2"></i>TV Shows
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#6556CD] hover:text-white p-4 duration-300 rounded-lg mt-2 mr-2"
        >
          <i className="ri-movie-2-line mr-2"></i>Popular
        </Link>
        <Link
          to="/people"
          className="hover:bg-[#6556CD] hover:text-white p-4 duration-300 rounded-lg mt-2 mr-2"
        >
          <i className="ri-group-line mr-2"></i>People
        </Link>
        {/* <Link
          to="/mylist"
          className="hover:bg-[#6556CD] hover:text-white p-3 duration-300 rounded-lg mt-2 mr-2"
        >
          <i className="ri-bookmark-line mr-2"></i>My List
        </Link> */}
      </nav>

      <hr className=" border-zinc-500 mt-4" />
      <h1 className="text-white text-xl font-semibold mt-4 mb-5 ">
        Website Information
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <Link
          to="/about"
          className="hover:bg-[#6556CD] hover:text-white p-3 duration-300 rounded-lg mt-2 mr-2"
        >
          <i className="ri-information-line mr-2"></i>About
        </Link>
        <Link
          to="/contact"
          className="hover:bg-[#6556CD] hover:text-white p-3 duration-300 rounded-lg mt-2 mr-2"
        >
          <i className="ri-mail-line mr-2"></i>Contact
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;

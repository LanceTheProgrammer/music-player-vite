import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";

const Display = () => {
  // Creating a reference to the display area
  const displayRef = useRef();
  // Accessing the current location object from React Router
  const location = useLocation();
  // Checking if the current route corresponds to an album
  const isAlbum = location.pathname.includes("album");
  // Extracting the album ID from the pathname, if applicable
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  // Determining the background color based on the album ID
  const bgColor = albumsData[Number(albumId)].bgColor;

  // useEffect hook to dynamically update the background color based on route changes
  useEffect(() => {
    // Applying gradient background if the route corresponds to an album, otherwise applying solid color
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  });

  return (
    // Rendering the display area with dynamic background color
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      {/* Defining routing structure */}
      <Routes>
        {/* Route for the root path */}
        <Route path="/" element={<DisplayHome />}></Route>
        {/* Route for album paths */}
        <Route path="/album/:id" element={<DisplayAlbum />}></Route>
      </Routes>
    </div>
  );
};

export default Display;

import React from "react";
import { useNavigate } from "react-router-dom";

// AlbumItem component displays an album with its image, name, and description
const AlbumItem = ({ image, name, desc, id }) => {
  // useNavigate hook provides navigation functionality
  const navigate = useNavigate();

  return (
    // Clicking on the album navigates to the corresponding album page
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      {/* Displaying album image */}
      <img className="rounded" src={image} alt="" />
      {/* Displaying album name */}
      <p className="font-bold mt-2 mb-1">{name}</p>
      {/* Displaying album description */}
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default AlbumItem;

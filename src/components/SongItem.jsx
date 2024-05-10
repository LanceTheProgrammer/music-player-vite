import React, { useContext } from "react";

// Importing PlayerContext for accessing player-related functionality
import { PlayerContext } from "../context/PlayerContext";

// Defining the SongItem component
const SongItem = ({ name, image, desc, id }) => {
  // Accessing playWithId function from PlayerContext using useContext hook
  const { playWithId } = useContext(PlayerContext);

  // Rendering the JSX structure for a song item
  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      {/* Displaying the song image */}
      <img className="rounded" src={image} alt="" />
      {/* Displaying the song name */}
      <p className="font-bold mt-2 mb-1">{name}</p>
      {/* Displaying the song description */}
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default SongItem;

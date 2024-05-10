import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";

// Defining the main App component
const App = () => {
  // Accessing audioRef and track from the PlayerContext using useContext hook
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      {/* Main layout structure */}
      <div className="h-[90%] flex">
        <Sidebar />

        <Display />
      </div>

      <Player />

      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

// Exporting the App component
export default App;

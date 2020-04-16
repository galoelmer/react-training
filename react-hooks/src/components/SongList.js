import React, { useState } from "react";
import { v1 as uuid } from "uuid";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Thunderstruck", id: 1 },
    { title: "T.N.T.", id: 2 },
    { title: "Back in Black", id: 3 },
  ]);

  const addSong = () => {
    setSongs([...songs, { title: "New Song", id: uuid() }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <button onClick={addSong}>Add Song</button>
    </div>
  );
};

export default SongList;

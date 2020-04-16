import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Thunderstruck", id: 1 },
    { title: "T.N.T.", id: 2 },
    { title: "Back in Black", id: 3 },
  ]);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;

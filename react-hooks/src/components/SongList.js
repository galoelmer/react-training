import React, { useState, useEffect } from "react";
import { v1 as uuid } from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Thunderstruck", id: 1 },
    { title: "T.N.T.", id: 2 },
    { title: "Back in Black", id: 3 },
  ]);

  const [age, setAge] = useState(20);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  // Use effect will run when songs data change
  useEffect(() => {
    console.log("useEffect just ran ", songs);
  }, [songs]);

  // Use effect will run when age data change
  useEffect(() => {
    console.log("useEffect just ran ", age);
  }, [age]);

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add age: {age}</button>
    </div>
  );
};

export default SongList;

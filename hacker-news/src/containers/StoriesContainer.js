import React, { useEffect, useState } from 'react';
import { getStoryIds, getStory } from '../services/hnAPi';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
    getStory(8863).then(data => console.log(data));
  }, []);
  return <h1>{JSON.stringify(storyIds)}</h1>;
};

import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnAPi';
import { Story } from '../components/Story';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);
  
  return storyIds.map(storyId => <Story key={storyId} storyId={storyId} />);
};

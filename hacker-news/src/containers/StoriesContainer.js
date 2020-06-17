import React, { useEffect, useState, memo } from 'react';
import { getStoryIds } from '../services/hnAPi';
import { Story } from '../components/Story';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
    console.log(count);
  }, [count]);

  return storyIds
    .slice(0, count)
    .map((storyId) => <Story key={storyId} storyId={storyId} />);
};

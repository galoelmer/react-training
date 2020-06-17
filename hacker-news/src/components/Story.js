import React, { useState, useEffect } from 'react';
import { getStory } from '../services/hnAPi';
import {
  Card,
  CardContent,
  CardActions,
  Link,
  Typography,
  Grid,
} from '@material-ui/core';

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, [storyId]);

  return story && story.url ? (
    <Card variant="outlined">
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <CardActions>
              <Link href={story.url}>{story.title}</Link>
            </CardActions>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption">By: {story.by}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption">Posted: {story.time}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  ) : null;
};

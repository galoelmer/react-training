import React from 'react';
import { StoriesContainer } from './containers/StoriesContainer';
import { Container, CssBaseline, Typography } from '@material-ui/core';

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h3" align="center" gutterBottom>
            Hacker News
        </Typography>
        <StoriesContainer />
      </Container>
    </>
  );
};

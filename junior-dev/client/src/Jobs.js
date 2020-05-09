import React from 'react';
import {Container, Header, Segment } from 'semantic-ui-react';
import Job from './Job';

export default function Jobs({ jobs }) {
  return (
    <Container>
      <div>
        <Header as="h1">Entry Level Developer Jobs</Header>
      </div>
      <Segment raised>
          {jobs.map((job, i) => (
            <Job job={job} key={i}/>
          ))}
      </Segment>
    </Container>
  );
}

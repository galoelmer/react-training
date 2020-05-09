import React from 'react';
import { Segment } from 'semantic-ui-react';

export default function Job({ job }) {
  return (
    <Segment.Group horizontal>
      <Segment>{job.title}</Segment>
      <Segment>{job.company}</Segment>
    </Segment.Group>
  );
}

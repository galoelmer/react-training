import React from 'react';
import { Card, Image, Segment } from 'semantic-ui-react';
import moment from 'moment';

export default function Job({ job }) {
  return (
    <Card link>
      <Card.Content>
        <Segment basic>
          <Image rounded size="mini" src={job.company_logo ? job.company_logo : "https://picsum.photos/50"} />
        </Segment>
        <Card.Header>{job.title}</Card.Header>
        <Card.Meta>{job.company}</Card.Meta>
        <Card.Description>
          <strong>{job.location}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>Posted {moment(job.created_at).fromNow()}</Card.Content>
    </Card>
  );
}

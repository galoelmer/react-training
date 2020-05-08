import React from 'react';
import { List } from 'semantic-ui-react';

export default function Job({ job }) {
  return (
    <div>
      <List horizontal relaxed>
        <List.Item>{job.title}</List.Item>
        <List.Item>{job.company}</List.Item>
      </List>
    </div>
  );
}

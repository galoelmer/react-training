import React from 'react';
import { Header } from 'semantic-ui-react';
import Job from './Job';

export default function Jobs({ jobs }) {
  return (
    <div className="jobs">
      <div>
        <Header as="h1">Entry Level Developer Jobs</Header>
      </div>
      {jobs.map((job, i) => (
        <Job job={job} key={i}/>
      ))}
    </div>
  );
}

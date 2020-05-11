import React, { useState, useEffect } from 'react';
import { Container, Header, Pagination, Segment } from 'semantic-ui-react';
import Job from './Job';

export default function Jobs({ jobs }) {
  const [activePage, setActivePage] = useState(1);
  const [activeStep, setActiveStep] = useState(0);

  const prevActivePage = activePage;
  useEffect(() => {
    if (activePage > prevActivePage) {
      setActiveStep(activePage - 1);
    } else {
      setActiveStep(activePage - 1);
    }
  }, [activePage, prevActivePage]);

  const totalJobs = jobs.length;
  const jobsOnPage = jobs.slice(activeStep * 20, activeStep * 20 + 20);
  return (
    <Container>
      <div>
        <Header as="h1">Entry Level Developer Jobs</Header>
      </div>
      <Segment raised>
        {jobsOnPage.map((job, i) => (
          <Job job={job} key={i} />
        ))}
      </Segment>

      {/* //  TODO: Pagination component causing a warning message @galoelmer */}
      <Pagination
        activePage={activePage}
        onPageChange={(e, { activePage }) => setActivePage(activePage)}
        totalPages={Math.ceil(totalJobs / 20)}
      />
    </Container>
  );
}

import React, { useState, useEffect } from 'react';
import {
  Card,
  Container,
  Header,
  Pagination,
  Segment,
} from 'semantic-ui-react';
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
  const jobsOnPage = jobs.slice(activeStep * 21, activeStep * 21 + 21);
  return (
    <Container>
      <div>
        <Header
          style={{'font-size': '4em', 'text-shadow':'2px 2px 6px rgba(0,0,0,0.3)', 'font-family': 'Nunito'}}
          as="h1"
        >
          Entry Level Developer Jobs
        </Header>
      </div>
      <Segment compact>
        <Card.Group centered>
          {jobsOnPage.length !== 0 ? (
            jobsOnPage.map((job, i) => <Job job={job} key={i} />)
          ) : (
            <Header as="h1" textAlign="center">
              No Jobs
            </Header>
          )}
        </Card.Group>
      </Segment>

      {/* //  TODO: Pagination component causing a warning message @galoelmer */}
      <Pagination
        activePage={activePage}
        onPageChange={(e, { activePage }) => setActivePage(activePage)}
        totalPages={Math.ceil(totalJobs / 21)}
      />
    </Container>
  );
}

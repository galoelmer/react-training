import React, { Component } from 'react';
import { Container, Header, Pagination, Segment } from 'semantic-ui-react';
import Job from './Job';

export default class Jobs extends Component {
  state = { activePage: 1, activeStep: 0 };

  handlePaginationChange = (e, { activePage }) => {
    if (activePage > this.state.activePage) {
      this.setState({ activeStep: activePage - 1 });
    } else {
      this.setState({ activeStep: activePage - 1 });
    }
    this.setState({ activePage });
  };

  render() {
    const jobsList = this.props.jobs;
    const { activePage, activeStep } = this.state;
    const totalJobs = jobsList.length;
    const jobsOnPage = jobsList.slice(activeStep * 20, activeStep * 20 + 20);
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
        <Pagination
          activePage={activePage}
          onPageChange={this.handlePaginationChange}
          totalPages={Math.ceil(totalJobs / 20)}
        />
      </Container>
    );
  }
}

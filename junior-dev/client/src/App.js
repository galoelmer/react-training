import React from 'react';
import { Container } from 'semantic-ui-react';

import Jobs from './Jobs';

const JOB_API_URL = 'http://localhost:3001/jobs';

async function fetchJobs(updateCb) {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();

  updateCb(json);
}

function App() {

  const [jobsList, updateJobs] = React.useState([]);
  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, [])

  return (
    <Container textAlign="center">
      <Jobs jobs={jobsList}/>
    </Container>
  );
}

export default App;

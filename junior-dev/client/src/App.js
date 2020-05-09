import React from 'react';
import { Container } from 'semantic-ui-react';

import Jobs from './Jobs';

const mockJobs = [
  {title: 'SWE 1', company: "Amazon"},
  {title: 'SWE 1', company: "Facebook"},
  {title: 'SWE 1', company: "Google"}
]

function App() {
  return (
    <Container textAlign="center">
      <Jobs jobs={mockJobs}/>
    </Container>
  );
}

export default App;

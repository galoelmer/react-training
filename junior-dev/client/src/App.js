import React from 'react';

import Jobs from './Jobs';

const mockJobs = [
  {title: 'SWE 1', company: "Amazon"}
]

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs}/>
    </div>
  );
}

export default App;

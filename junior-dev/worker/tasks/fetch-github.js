var fetch = require('node-fetch');

const baseUrl = 'https://jobs.github.com/positions.json';

async function fetchGitHub() {
  let resultCount = 1,
    onPage = 0;
  const allJobs = [];

  while (resultCount > 0) {
    const res = await fetch(`${baseUrl}?page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(...jobs);
    resultCount = jobs.length;
    console.log('Got', resultCount, 'jobs');
    onPage++;
  }

  console.log('got', allJobs.length, 'jobs');
}

fetchGitHub().catch(function (err) {
  console.log('Error', err);
});

module.exports = fetchGitHub;

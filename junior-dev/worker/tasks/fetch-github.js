var fetch = require('node-fetch');
var redis = require('redis'),
  client = redis.createClient();

const { promisify } = require('util');
// const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const baseUrl = 'https://jobs.github.com/positions.json';

async function fetchGitHub() {
  let resultCount = 1,
    onPage = 0;
  const allJobs = [];
  // fetch all pages
  while (resultCount > 0) {
    try {
      const res = await fetch(`${baseUrl}?page=${onPage}`);
      const jobs = await res.json();
      allJobs.push(...jobs);
      resultCount = jobs.length;
      console.log('Got', resultCount, 'jobs');
      onPage++;
    } catch (err) {
      console.log(err);
    }
  }
  console.log('got', allJobs.length, 'jobs')
  // filter all jobs
  const jrJobs = allJobs.filter((job) => {
    const jobTitle = job.title.toLowerCase();

    if (
      jobTitle.includes('senior') ||
      jobTitle.includes('manager') ||
      jobTitle.includes('sr.') ||
      jobTitle.includes('architect')
    ) {
      return false;
    }

    return true;
  });
  console.log("Total filter jobs: ", jrJobs.length);

  // set in redis
  const success = await setAsync('github', JSON.stringify(jrJobs));
  console.log({ success });
}

fetchGitHub();

module.exports = fetchGitHub;

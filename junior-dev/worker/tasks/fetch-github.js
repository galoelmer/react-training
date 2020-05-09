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
  console.log('got', allJobs.length, 'jobs');
  
  const success = await setAsync('github', JSON.stringify(allJobs));
  console.log({ success });
}

fetchGitHub();

module.exports = fetchGitHub;

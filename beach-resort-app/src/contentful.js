const contentful = require('contentful');

export default contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_API_KEY,
});

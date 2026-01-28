import axios from 'axios';

// Task 2 requires this function name
const fetchUserData = async (username, location, minRepos) => {
  let query = `q=${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?${query}`);
  return response.data;
};

export default fetchUserData;
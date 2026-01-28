import axios from 'axios';

// Task 1: Basic user fetch (by exact username)
export const fetchUserData = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
};

// Task 2: Advanced search (using search query parameters)
export const fetchAdvancedUserData = async (username, location, minRepos) => {
    let query = '';
    if (username) query += `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data; // This returns { total_count, items: [] }
};
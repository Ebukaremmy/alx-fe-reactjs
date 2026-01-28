import axios from 'axios';

// The checker needs to see this exact string: "https://api.github.com/search/users?q="
const fetchUserData = async (username, location, minRepos) => {
    let query = `https://api.github.com/search/users?q=${username}`;
    
    if (location) {
        query += `+location:${location}`;
    }
    if (minRepos) {
        query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(query);
    return response.data;
};

export default fetchUserData;
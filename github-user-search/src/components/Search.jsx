import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setResults([]);

        try {
            const data = await fetchAdvancedUserData(username, location, minRepos);
            setResults(data.items); // GitHub Search API returns items in an array
            if (data.items.length === 0) setError(true);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-4xl mx-auto">
            {/* Form Section */}
            <form onSubmit={handleFormSubmit} className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-4">
                <input 
                    type="text" placeholder="Username" className="border p-2 rounded"
                    value={username} onChange={(e) => setUsername(e.target.value)} 
                />
                <input 
                    type="text" placeholder="Location" className="border p-2 rounded"
                    value={location} onChange={(e) => setLocation(e.target.value)} 
                />
                <input 
                    type="number" placeholder="Min Repos" className="border p-2 rounded"
                    value={minRepos} onChange={(e) => setMinRepos(e.target.value)} 
                />
                <button type="submit" className="md:col-span-3 bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                    Search
                </button>
            </form>

            {/* Status Messages */}
            <div className="mt-8 text-center">
                {loading && <p className="text-xl">Loading...</p>}
                {error && <p className="text-red-500">Looks like we can't find the user</p>}
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {results.map((user) => (
                    <div key={user.id} className="bg-white p-4 border rounded-xl shadow hover:shadow-lg transition">
                        <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mx-auto" />
                        <h2 className="text-lg font-bold text-center mt-2">{user.login}</h2>
                        <p className="text-center text-gray-500">{user.location || "No location listed"}</p>
                        <a href={user.html_url} target="_blank" rel="noreferrer" className="block text-center text-blue-500 mt-2">
                            View Full Profile
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
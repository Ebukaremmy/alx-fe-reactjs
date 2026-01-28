import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        GitHub User Search
      </h1>
      <Search />
    </div>
  );
}

export default App;
// pages/SearchUser.tsx
"use client";
import { useState } from 'react';
import { getUserByCNIC } from '../utils/users';

const SearchUser = () => {
  const [cnic, setCnic] = useState('');
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getUserByCNIC(cnic);
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:');
      setError('User not found');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-2xl text-center mb-4">Search User by CNIC</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Enter CNIC"
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none"
        />
        <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded-r-md">
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {userData && (
        <div className="bg-white rounded-md shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">User Data:</h2>
          <p><span className="font-bold">Name:</span> {userData.name}</p>
          <p><span className="font-bold">Age:</span> {userData.age}</p>
          {/* Add more user data fields as needed */}
        </div>
      )}
    </div>
  );
};

export default SearchUser;

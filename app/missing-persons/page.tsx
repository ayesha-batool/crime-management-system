"use client";
import { useState } from 'react';
import { MissingPerson, searchMissingPersons } from '../utils/missingPersons';

const MissingPersonsPage: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const [missingPersons, setMissingPersons] = useState<MissingPerson[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await searchMissingPersons(searchInput);
      setMissingPersons(data);
    } catch (error) {
      console.error('Error fetching missing persons:');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Missing Persons</h1>
      <form onSubmit={handleSubmit} className="mb-4 flex">
        <input
          type="text"
          placeholder="Enter CNIC or Name"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="border border-gray-300 p-2 rounded-md mr-2 text-black w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          {loading ? 'Loading...' : 'Search'}
        </button>
      </form>
      {missingPersons.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Missing Persons</h2>
          <ul>
            {missingPersons.map((person) => (
              <li key={person.name}>{person.name} - CNIC: {person.user_cnic}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MissingPersonsPage;

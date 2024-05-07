"use client"
import { useState } from 'react';
import { WantedPerson, searchWantedPersons } from '../utils/wantedPersons';

const WantedPersonsPage: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const [wantedPersons, setWantedPersons] = useState<WantedPerson[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await searchWantedPersons(searchInput);
      setWantedPersons(data);
    } catch (error) {
      console.error('Error searching for wanted persons:');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Wanted Persons</h1>
      <form onSubmit={handleSubmit} className="mb-4 flex">
        <input
          type="text"
          placeholder="Enter Name or Crime Description"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="border border-gray-300 p-2 rounded-md mr-2 text-black w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          {loading ? 'Loading...' : 'Search'}
        </button>
      </form>
      {wantedPersons.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Wanted Persons</h2>
          <table className="border-collapse border border-gray-400 w-full">
            <thead>
              <tr>
                <th className="border border-gray-400 p-2">Name</th>
                <th className="border border-gray-400 p-2">Age</th>
                <th className="border border-gray-400 p-2">Gender</th>
                <th className="border border-gray-400 p-2">Status</th>
                <th className="border border-gray-400 p-2">Crime Description</th>
              </tr>
            </thead>
            <tbody>
              {wantedPersons.map((person) => (
                <tr key={person.name}>
                  <td className="border border-gray-400 p-2">{person.name}</td>
                  <td className="border border-gray-400 p-2">{person.age}</td>
                  <td className="border border-gray-400 p-2">{person.gender}</td>
                  <td className="border border-gray-400 p-2">{person.status}</td>
                  <td className="border border-gray-400 p-2">{person.crime_description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default WantedPersonsPage;

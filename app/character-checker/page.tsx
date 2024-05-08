"use client";
import { useState } from 'react';
import { Crime, getCrimesByCnic } from '../utils/crime';
import RequireAuth from '../components/requiredAuth';

const CharacterChecker: React.FC = () => {
  const [cnic, setCnic] = useState('');
  const [crimes, setCrimes] = useState<Crime[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const crimesData = await getCrimesByCnic(cnic);
      console.log('Crimes', crimesData);
      setCrimes(crimesData);
    } catch (error) {
      console.error('Error fetching crimes:');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Character Checker</h1>
      <form onSubmit={handleSubmit} className="mb-4 flex">
        <input
          type="text"
          placeholder="Enter CNIC"
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
          className="border border-gray-300 p-2 rounded-md mr-2 text-black w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          {loading ? 'Loading...' : 'Check'}
        </button>
      </form>
      {crimes.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Crimes Associated with CNIC: {cnic}</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Crime Type</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {crimes.map((crime) => (
                <tr key={crime.id}>
                  <td className="border px-4 py-2">{crime.title}</td>
                  <td className="border px-4 py-2">{crime.description}</td>
                  <td className="border px-4 py-2">{new Date(crime.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RequireAuth(CharacterChecker);

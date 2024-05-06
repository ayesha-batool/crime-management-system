"use client";
import { useState, useEffect } from 'react';

import { getAllCrimes, addCrime, updateCrime, deleteCrime, Crime } from '../utils/crime';
import CrimeForm from '../components/crimeForm';
import CrimeListItem from '../components/crimeListItem';

const CrimeList: React.FC = () => {
  const [crimes, setCrimes] = useState<Crime[]>([]);
  const [editCrime, setEditCrime] = useState<Partial<Crime>>({});

  useEffect(() => {
    fetchCrimes();
  }, []);

  const fetchCrimes = async () => {
    try {
      const data = await getAllCrimes();
      setCrimes(data);
    } catch (error) {
      console.error('Error fetching crimes:', error.message);
    }
  };

  const handleAddCrime = async (crime: { title: string; description: string }) => {
    try {
      const addedCrime = await addCrime(crime);
      console.log('Addedictions', addedCrime);
      setCrimes([...crimes, addedCrime]);
    } catch (error) {
      console.error('Error adding crime:', error.message);
    }
  };

  const handleDeleteCrime = async (id: string) => {
    try {
      await deleteCrime(id);
      setCrimes(crimes.filter(crime => crime.id !== id));
    } catch (error) {
      console.error('Error deleting crime:', error.message);
    }
  };

  const handleUpdateCrime = async () => {
    try {
      if (!editCrime.id || !editCrime.title || !editCrime.description) return;
      const updatedCrime = await updateCrime(editCrime);
      const updatedCrimes = crimes.map(crime => (crime.id === updatedCrime.id ? updatedCrime : crime));
      setCrimes(updatedCrimes);
      setEditCrime({});
    } catch (error) {
      console.error('Error updating crime:', error.message);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Crime List</h1>
      <CrimeForm onSubmit={handleAddCrime} />
      <ul>
        {crimes.map(crime => (
          <CrimeListItem
            key={crime.id}
            crime={crime}
            onDelete={handleDeleteCrime}
            onEdit={setEditCrime}
          />
        ))}
      </ul>
      {editCrime.id && (
        <div className="mt-4">
          <CrimeForm onSubmit={handleUpdateCrime} />
        </div>
      )}
    </div>
  );
};

export default CrimeList;

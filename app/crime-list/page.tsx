"use client";
import { useState, useEffect } from 'react';

import { getAllCrimes, addCrime, updateCrime, deleteCrime, Crime } from '../utils/crime';
import CrimeForm from '../components/crimeForm';
import CrimeListItem from '../components/crimeListItem';
import { toast } from 'react-toastify';
import RequireAuth from '../components/requiredAuth';

const CrimeList: React.FC = () => {
  const [crimes, setCrimes] = useState<Crime[]>([]);
  const [editCrime, setEditCrime] = useState<Partial<Crime>>({});
  const [showEditModal, setShowEditModal] = useState(false);
  useEffect(() => {
    fetchCrimes();
  }, []);

  const fetchCrimes = async () => {
    try {
      const data = await getAllCrimes();
      setCrimes(data);
    } catch (error) {
      console.error('Error fetching crimes:');
    }
  };

  const handleAddCrime = async (crime: { title: string; description: string,user_cnic:string }) => {
    try {
      const addedCrime = await addCrime(crime);
      toast.success('Crime added successfully');
      setCrimes([...crimes, addedCrime]);
    } catch (error) {
      console.error('Error adding crime:');
    }
  };

  const handleDeleteCrime = async (id: string) => {
    try {
      await deleteCrime(id);
      toast.success('Crime deleted successfully');
      setCrimes(crimes.filter(crime => crime.id !== id));
    } catch (error) {
      console.error('Error deleting crime:');
    }
  };

  const handleUpdateCrime = async (crime: Partial<Crime>) => {
    try {
      console.log(crime,"edit");
      if (!crime.id || !crime.title || !crime.description) return;

      const updatedCrime = await updateCrime({
        id: crime.id!,
        title: crime.title!,
        description: crime.description!,
      });

      const updatedCrimes = crimes.map(crime => (crime.id === updatedCrime.id ? updatedCrime : crime));
      toast.success("Information updated successfully");
      setCrimes(updatedCrimes);
      setEditCrime({});
      setShowEditModal(false);
    } catch (error) {
      console.error('Error updating crime:', error);
    }
  };

  const handleEditClick = (crime: Partial<Crime>) => {
    console.log('Edit',crime)
    setEditCrime(crime);
    setShowEditModal(true);
  };
  return (
    <div className="container mx-auto my-4 min-h-[80vh]">
    <h1 className="text-3xl font-bold mb-4 text-center">Add Crime</h1>
    <CrimeForm onSubmit={handleAddCrime} />
    <ul>
      {crimes.map(crime => (
        <CrimeListItem
          key={crime.id}
          crime={crime}
          onDelete={handleDeleteCrime}
          onEdit={() => handleEditClick(crime)}
        />
      ))}
    </ul>
    {showEditModal && (
      <div className={`fixed inset-0 flex items-center justify-center z-50 ${showEditModal ? 'visible' : 'invisible'}`}>
      <div className="fixed inset-0 bg-black opacity-50" onClick={() => setShowEditModal(false)}></div>
      <div className="relative z-10 bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit Crime</h2>
        <CrimeForm
          initialValues={editCrime} // Pre-fill form with editCrime data
          onSubmit={(updatedCrime) => handleUpdateCrime(updatedCrime)}
          onClose={() => setShowEditModal(false)} // Close modal on cancel
        />
      </div>
    </div>
      )}
  </div>
  );
};

export default RequireAuth(CrimeList);

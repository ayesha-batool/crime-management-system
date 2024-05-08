"use client"
import { useState } from 'react';
import MissingPersonForm from '../components/missingPersonForm';
import { getLoggedInUserEmail } from '../utils/auth';
import { deleteMissingPerson, MissingPerson, searchMissingPersons, updateMissingPerson } from '../utils/missingPersons';
import { toast } from 'react-toastify';
import RequireAuth from '../components/requiredAuth';

// Rest of the imports remain the same

const MissingPersonsPage: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const [missingPersons, setMissingPersons] = useState<MissingPerson[]>([]);
  const [loading, setLoading] = useState(false);
  const [editMissingPerson, setEditMissingPerson] = useState<Partial<MissingPerson>>({}); // State for the missing person being edited
  const [showEditModal, setShowEditModal] = useState(false); // State to control the visibility of the edit modal
  const loggedInUserEmail = getLoggedInUserEmail();
  const isAdmin = loggedInUserEmail === 'admin@gmail.com';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await searchMissingPersons(searchInput);
      console.log(data,"search");
      setMissingPersons(data);
    } catch (error) {
      console.error('Error fetching missing persons:');
    } finally {
      setLoading(false);
    }
  };
  const handleEdit = async (id: string) => {
    try {
      // Fetch the missing person record based on id
      const missingPerson = missingPersons.find(person => person.id === id);
      if (!missingPerson) {
        console.error('Missing person not found');
        return;
      }
      // Set the editMissingPerson state with the missing person data
      setEditMissingPerson(missingPerson);
      // Open the edit modal
      setShowEditModal(true);
    } catch (error) {
      console.error('Error editing missing person:', error);
    }
  };
  const handleUpdatePerson = async (updatedPerson: Partial<MissingPerson>) => {
    try {
      // Perform the update operation
      await updateMissingPerson(editMissingPerson?.id || "",updatedPerson);
      // Update the missing person in the state
      const updatedPersons = missingPersons.map(person => (person.id === updatedPerson.id ? { ...person, ...updatedPerson } : person));
      setMissingPersons(updatedPersons);
      // Close the edit modal
      setShowEditModal(false);
      toast.success("Data updated successfully");
    } catch (error) {
      console.error('Error updating missing person:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      // Perform the delete operation
      await deleteMissingPerson(id);
      // Remove the deleted missing person from the state
      setMissingPersons(prevPersons => prevPersons.filter(person => person.id !== id));
      toast.success("Data deleted successfully");
    } catch (error) {
      console.error('Error deleting missing person:', error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
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
          <table className="table-auto w-full">
            <thead>
              <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">CNIC</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Description</th>
                {isAdmin && <th className="px-4 py-2">Actions</th>}
              </tr>
            </thead>
            <tbody>
              {missingPersons.map((person) => (
                <tr key={person.user_cnic}>
                   <td className="border px-4 py-2">{person.name}</td>
                <td className="border px-4 py-2">{person.user_cnic}</td>
                <td className="border px-4 py-2">{person.age}</td>
                <td className="border px-4 py-2">{person.description}</td>
                  {isAdmin && (
                    <td className="border px-4 py-2 flex items-center justify-end">
                      <button onClick={() => handleEdit(person.id ||"")} className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2">Edit</button>
                      <button onClick={() => handleDelete(person.id || "")} className="bg-red-500 text-white px-2 py-1 rounded-md">Delete</button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit modal */}
      {showEditModal && (
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${showEditModal ? 'visible' : 'invisible'}`}>
          <div className="fixed inset-0 bg-black opacity-50" onClick={() => setShowEditModal(false)}></div>
          <div className="relative z-10 bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Missing Person</h2>
            <MissingPersonForm
              initialValues={editMissingPerson} // Pre-fill form with editMissingPerson data
              onSubmit={(updatedPerson) => handleUpdatePerson(updatedPerson)}
              onClose={() => setShowEditModal(false)} // Close modal on cancel
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RequireAuth(MissingPersonsPage);

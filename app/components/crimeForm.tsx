// components/CrimeForm.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { User, getAllUsers } from '../utils/users';
import { Crime } from '../utils/crime';

type Props = {
  onSubmit: (crime: { id?:string,title: string; description: string; user_cnic: string }) => void;
  initialValues?: Partial<Crime>; // Optional initial values for editing
  onClose?: () => void; // Optional function for closing the form (e.g., in a modal)
};

const CrimeForm: React.FC<Props> = ({ onSubmit, initialValues = {}, onClose }) => {
  const [title, setTitle] = useState(initialValues.title || '');
  const [description, setDescription] = useState(initialValues.description || '');
  const [id, setId] = useState(initialValues.id || '');

  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserCnic, setSelectedUserCnic] = useState(initialValues.user_cnic || '');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const usersData = await getAllUsers();
      setUsers(usersData);
    } catch (error) {
      console.error('Error fetching users:');
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(title, description, "update crime form");
  
    // Check if title, description, and selectedUserCnic are not empty
    if (!title || !description || !selectedUserCnic) {
      return;
    }
  
    // Construct the form data
    const formData: Partial<Crime> = {
      title: title || '', // Ensure title is not undefined
      description: description || '', // Ensure description is not undefined
      user_cnic: selectedUserCnic || '', // Ensure user_cnic is not undefined
    };
  
    // Conditionally include the id in the form data
    if (initialValues.id) {
      formData.id = initialValues.id;
    }
  
    // Call onSubmit with the constructed form data
    onSubmit(formData);
  
    // Reset the form fields
    setTitle('');
    setDescription('');
    setSelectedUserCnic('');
  };
  
  

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Crime Title</label>
        <input
          type="text"
          id="title"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-full text-black"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Crime Description</label>
        <textarea
          id="description"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-full h-40 resize-none text-black"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="user" className="block text-sm font-medium text-gray-700 mb-1">Select User CNIC</label>
        <select
          id="user"
          value={selectedUserCnic}
          onChange={(e) => setSelectedUserCnic(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-full text-black"
        >
          <option value="">Select User CNIC</option>
          {users.map((user) => (
            <option key={user.id} value={user.cnic}>
              {user.email} - {user.cnic}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-end">
        {onClose && (
          <button type="button" className="mr-4 bg-gray-400 text-white px-4 py-2 rounded-md" onClick={onClose}>
            Cancel
          </button>
        )}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          {initialValues.id ? 'Update Crime' : 'Add Crime'}
        </button>
      </div>
    </form>
  );
};

export default CrimeForm;

// components/CrimeForm.tsx

import React, { useEffect, useState } from 'react';
import { User, getAllUsers } from '../utils/users';

type Props = {
  onSubmit: (crime: { title: string; description: string,user_cnic:string }) => void;
};

const CrimeForm: React.FC<Props> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserCnic, setSelectedUserCnic] = useState('');

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
    if (!title || !description || !selectedUserCnic) return;
    onSubmit({ title, description, user_cnic: selectedUserCnic });
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
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Crime</button>
    </form>
  );
};

export default CrimeForm;

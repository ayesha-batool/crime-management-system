// components/CrimeForm.tsx

import React, { useState } from 'react';

type Props = {
  onSubmit: (crime: { title: string; description: string }) => void;
};

const CrimeForm: React.FC<Props> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;
    onSubmit({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="border border-gray-300 p-2 rounded-md mr-2 text-black"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="border border-gray-300 p-2 rounded-md mr-2 text-black"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Crime</button>
    </form>
  );
};

export default CrimeForm;

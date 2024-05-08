// components/CrimeListItem.tsx

import React from 'react';

type Props = {
  crime: { id?: string; title: string; description: string };
  onDelete: (id: string) => void;
  onEdit: (crime: { id?: string; title: string; description: string }) => void;
};

const CrimeListItem: React.FC<Props> = ({ crime, onDelete, onEdit }) => {
  return (
    <li key={crime.id} className="bg-gray-700 shadow-md rounded-md p-4 mb-2">
      <div className="font-bold mb-2">{crime.title}</div>
      <div className="mb-4">{crime.description}</div>
      <button onClick={() => onEdit(crime || "")} className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2">Edit</button>
      <button onClick={() => onDelete(crime.id || "")} className="bg-red-500 text-white px-2 py-1 rounded-md">Delete</button>
    </li>
  );
};

export default CrimeListItem;

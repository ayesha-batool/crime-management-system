"use client";
import React, { useState } from 'react';
import { MissingPerson } from '../utils/missingPersons';

type Props = {
  initialValues: Partial<MissingPerson>;
  onSubmit: (person:Partial< MissingPerson>) => void;
  onClose?: () => void;
};

const MissingPersonForm: React.FC<Props> = ({ initialValues, onSubmit,onClose }) => {
  const [person, setPerson] = useState(initialValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPerson((prevPerson) => ({ ...prevPerson, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(person);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={person.name}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md mr-2 text-black w-full mb-2"
      />
      <input
        type="text"
        placeholder="CNIC"
        name="user_cnic"
        value={person.user_cnic}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md mr-2 text-black w-full mb-2"
      />
      <input
        type="number"
        placeholder="Age"
        name="age"
        value={person.age ?? ""}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md mr-2 text-black w-full mb-2"
      />
      <select
      title='gender'
        name="gender"
        value={person.gender}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md mr-2 text-black w-full mb-2"
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Others">Others</option>
      </select>
      <textarea
        placeholder="Description"
        name="description"
        value={person.description}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md mr-2 text-black w-full mb-2"
      />
      <input
        type="text"
        placeholder="Contact Information"
        name="contact_information"
        value={person.contact_information}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-md mr-2 text-black w-full mb-2"
      />
      {onClose && (
          <button type="button" className="mr-4 bg-gray-400 text-white px-4 py-2 rounded-md" onClick={onClose}>
            Cancel
          </button>
        )}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default MissingPersonForm;

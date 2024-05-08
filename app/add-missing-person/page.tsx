"use client"
import React, { useState } from 'react';
import { addMissingPerson, MissingPerson } from '../utils/missingPersons';
import { toast } from 'react-toastify';
import MissingPersonForm from '../components/missingPersonForm';
import { useRouter } from 'next/navigation';
import RequireAuth from '../components/requiredAuth';

const AddMissingPersonPage: React.FC = () => {
  const router = useRouter();

  const handleSubmit = async (person: Partial<MissingPerson>) => {
    try {
      await addMissingPerson(person);
      toast.success('Successfully added Missing Person Info');
      router.push('/missing-persons');
    } catch (error) {
      console.error('Error adding missing person:', error);
    }
  };

  // Complete initial values for the missing person
  const initialValues: MissingPerson = {
    name: '',
    user_cnic: '',
    age: null,
    gender: '',
    description: '',
    contact_information: '',
    status: 'Missing',
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Missing Person</h1>
      <MissingPersonForm initialValues={initialValues} onSubmit={handleSubmit} />
    </div>
  );
};

export default RequireAuth(AddMissingPersonPage);

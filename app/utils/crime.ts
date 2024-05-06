// utils/crime.ts

import supabase from './supabase';

const TABLE_NAME = 'crimes';

export type Crime = {
  id: string;
  title: string;
  description: string;
};

export const getAllCrimes = async (): Promise<Crime[]> => {
  const { data, error } = await supabase.from<Crime>(TABLE_NAME).select('*');
  if (error) {
    throw error;
  }
  return data || [];
};

export const addCrime = async (crime: { title: string; description: string }): Promise<Crime> => {
  const { data, error } = await supabase.from<Crime>(TABLE_NAME).insert([crime]).select();
  if (error) {
    throw error;
  }
  return data![0];
};

export const updateCrime = async (crime: { id: string; title: string; description: string }): Promise<Crime> => {
  const { data, error } = await supabase.from<Crime>(TABLE_NAME).update(crime).match({ id: crime.id }).single();
  if (error) {
    throw error;
  }
  return data!;
};

export const deleteCrime = async (id: string): Promise<void> => {
  const { error } = await supabase.from<Crime>(TABLE_NAME).delete().match({ id });
  if (error) {
    throw error;
  }
};

// utils/crime.ts

import supabase from "./supabase";


const TABLE_NAME = 'crimes';

export interface Crime {
  id: string;
  title: string;
  description: string;
  user_cnic:string;
  created_at: string;
}

export const getAllCrimes = async (): Promise<Crime[]> => {
  const { data, error } = await supabase.from(TABLE_NAME).select('*');
  if (error) {
    throw error;
  }
  return data || [];
};

export const addCrime = async (crime: { title: string; description: string, user_cnic:string }): Promise<Crime> => {
  const { data, error } = await supabase.from(TABLE_NAME).insert([crime]).select('*');
  console.log(data,"data");
  if (error) {
    throw error;
  }
  return data![0];
};

export const getCrimesByCnic = async (cnic: string): Promise<Crime[]> => {
  const { data, error } = await supabase.from(TABLE_NAME).select('*').eq('user_cnic', cnic);
  if (error) {
    throw error;
  }
  return data || [];
};
export const updateCrime = async (crime: { id: string; title: string; description: string }): Promise<Crime> => {
  const { data: updatedData, error } = await supabase.from(TABLE_NAME).update(crime).match({ id: crime.id });
  if (error) {
    throw error;
  }
  
  // Fetch the updated crime data after the update operation
  const { data: fetchedData, error: fetchError } = await supabase.from(TABLE_NAME).select().eq('id', crime.id);
  if (fetchError) {
    throw fetchError;
  }
  
  // Return the updated crime data
  return fetchedData![0]; // Assuming that only one record is updated
};

export const deleteCrime = async (id: string): Promise<void> => {
  const { error } = await supabase.from(TABLE_NAME).delete().match({ id });
  if (error) {
    throw error;
  }
};

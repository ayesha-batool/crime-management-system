// utils/missingPersons.ts

import supabase from "./supabase";


export interface MissingPerson {
  id?: string;
  name: string;
  user_cnic: string;
  age: number | null;
  gender: string;
  description: string;
//   dateMissing: Date;
//   lastSeenLocation: string;
  contact_information: string;
  status: string;
}

export const searchMissingPersons = async (query: string): Promise<MissingPerson[]> => {
    const { data, error } = await supabase
    .from('missing-persons')
    .select('*')
    .or(`user_cnic.eq.${query},name.ilike.%${query}%`);
  
  if (error) {
    throw error;
  }

  return data || [];
};

export const addMissingPerson = async (person: Partial<MissingPerson>): Promise<MissingPerson | null> => {
    const { data, error } = await supabase.from('missing-persons').insert([person]).select();
  
    if (error) {
      throw error;
    }
  
    return data ? data[0] : null;
  };

  
export const deleteMissingPerson = async (id: string): Promise<void> => {
  const { error } = await supabase.from('missing-persons').delete().eq('id', id);
  
  if (error) {
    throw error;
  }
};

export const updateMissingPerson = async (id: string, updatedPerson:Partial< MissingPerson>): Promise<MissingPerson | null> => {
  const { data, error } = await supabase.from('missing-persons').update(updatedPerson).eq('id', id).select();
  
  if (error) {
    throw error;
  }
  
  return data ? data[0] : null;
};
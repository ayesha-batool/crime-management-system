// utils/user.ts

import supabase from "./supabase";


const TABLE_NAME = 'users';

export type User = {
  id: string;
  email: string;
  cnic:string;
  password: string; // Note: In practice, you should never store passwords directly like this. Use proper hashing and salting.
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const { data, error } = await supabase.from(TABLE_NAME).select('*').eq('email', email).limit(1);
  console.log(data,"user");
  if (error) {
    throw error;
  }
  return data[0] || null;
};

export const createUser = async (user: { email: string; password: string, cnic: string }): Promise<User> => {
  const { data, error } = await supabase.from(TABLE_NAME).insert([user]).select();
  if (error) {
    throw error;
  }
  return data![0];
};

export const getUserById = async (id: string): Promise<User | null> => {
  const { data, error } = await supabase.from(TABLE_NAME).select('*').eq('id', id).single();
  if (error) {
    throw error;
  }
  return data || null;
};

export const getAllUsers = async (): Promise<User[]> => {
  const { data, error } = await supabase.from(TABLE_NAME).select('*');
  if (error) {
    throw error;
  }
  return data || [];
};
export const updateUser = async (id: string, updates: Partial<User>): Promise<User | null> => {
  const { data, error } = await supabase.from(TABLE_NAME).update(updates).eq('id', id).single();
  if (error) {
    throw error;
  }
  return data || null;
};

export const deleteUser = async (id: string): Promise<void> => {
  const { error } = await supabase.from(TABLE_NAME).delete().eq('id', id);
  if (error) {
    throw error;
  }
};
export async function getUserByCNIC(cnic: string) {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('cnic', cnic)
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching user data:');
    throw error;
  }
}

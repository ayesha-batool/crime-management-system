// utils/user.ts

import supabase from "./supabase";


const TABLE_NAME = 'users';

export type User = {
  id: string;
  email: string;
  password: string; // Note: In practice, you should never store passwords directly like this. Use proper hashing and salting.
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const { data, error } = await supabase.from<User>(TABLE_NAME).select('*').eq('email', email).single();
  if (error) {
    throw error;
  }
  return data || null;
};

export const createUser = async (user: { email: string; password: string }): Promise<User> => {
  const { data, error } = await supabase.from<User>(TABLE_NAME).insert([user]).select();
  if (error) {
    throw error;
  }
  return data![0];
};

// utils/user.ts

import supabase from "./supabase";


const TABLE_NAME = 'users';

export type User = {
  id: string;
  email: string;
  password: string; // Note: In practice, you should never store passwords directly like this. Use proper hashing and salting.
  cnic: string;
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const { data, error } = await supabase.from(TABLE_NAME).select('*').eq('email', email).single();
  if (error) {
    throw error;
  }
  return data || null;
};

export const createUser = async (user: { email: string; password: string }): Promise<User> => {
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
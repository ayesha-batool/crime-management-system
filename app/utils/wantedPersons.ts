import supabase from "./supabase";

// Define the table name
const TABLE_NAME = 'wanted_persons';

// Define the type for a wanted person
export type WantedPerson = {
  name: string;
  age: string;
  gender: string;
  status: string;
  crime_description: string;
};

// Function to add a wanted person to the database
export const addWantedPerson = async (person: WantedPerson): Promise<WantedPerson | null> => {
  const { data, error } = await supabase.from(TABLE_NAME).insert([person]).single();
  if (error) {
    throw error;
  }
  return data || null;
};

// Function to search for wanted persons based on a query
export const searchWantedPersons = async (query: string): Promise<WantedPerson[]> => {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select('*')
      .or(`name.ilike.%${query}%,crime_description.ilike.%${query}%`); // Corrected usage of ilike
    if (error) {
      throw error;
    }
    return data || [];
  };
  

// Add more functions as needed (e.g., functions for updating, deleting, or fetching individual wanted persons)

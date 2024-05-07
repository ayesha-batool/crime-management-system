"use client";
import { useState } from 'react';
import { addWantedPerson, WantedPerson } from '../utils/wantedPersons'; // Import the function to add a wanted person
import { useRouter } from 'next/navigation';

const AddWantedPersonPage: React.FC = () => {
  const router = useRouter();
  const [person, setPerson] = useState<WantedPerson>({
    name: "",
    age: "",
    gender: "",
    crime_description: "",
    status: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await addWantedPerson(person); // Call the function to add a wanted person
      if (data) {
        router.push("/wanted-persons"); // Redirect to the list of wanted persons after successful addition
      }
    } catch (error) {
      console.error("Error adding wanted person:");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPerson((prevPerson) => ({ ...prevPerson, [name]: value }));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Wanted Person</h1>
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
          placeholder="Age"
          name="age"
          value={person.age}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md mr-2 text-black w-full mb-2"
        />
        <input
          type="text"
          placeholder="Gender"
          name="gender"
          value={person.gender}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md mr-2 text-black w-full mb-2"
        />
        <input
          type="text"
          placeholder="Status"
          name="status"
          value={person.status}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md mr-2 text-black w-full mb-2"
        />
        <textarea
          placeholder="Crime Description"
          name="crime_description"
          value={person.crime_description}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md mr-2 text-black w-full mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          {loading ? "Adding..." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddWantedPersonPage;

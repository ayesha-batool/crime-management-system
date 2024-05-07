"use client";
import { useEffect, useState } from "react";
import { MissingPerson, addMissingPerson } from "../utils/missingPersons";
import { useRouter } from "next/navigation";
import { getAllUsers } from "../utils/users";

const AddMissingPersonPage: React.FC = () => {
  const router = useRouter();
  const [person, setPerson] = useState<MissingPerson>({
    name: "",
    user_cnic: "",
    age: null,
    gender: "",
    description: "",
    // dateMissing: new Date(),
    // lastSeenLocation: "",
    contact_information: "",
    status: "Missing", // Assuming default status is "Missing"
  });
  const [loading, setLoading] = useState(false);

  const [userCnics, setUserCnics] = useState<string[]>([]); // State to store CNICs of users

  useEffect(() => {
    // Fetch CNICs of users when component mounts
    fetchUserCnics();
  }, []);

  const fetchUserCnics = async () => {
    try {
      const users = await getAllUsers(); // Fetch users from the database
      const cnics = users.map(user => user.cnic); // Extract CNICs from users
      setUserCnics(cnics);
    } catch (error) {
      console.error("Error fetching user CNICs:");
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await addMissingPerson(person);
      if (data) {
        router.push("/missing-persons"); // Redirect to the list of missing persons after successful addition
      }
    } catch (error) {
      console.error("Error adding missing person:");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPerson((prevPerson) => ({ ...prevPerson, [name]: value }));
  };
  

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Missing Person</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={person.name}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md mr-2 text-black w-full mb-2"
        />
        <select
          value={person.user_cnic}
          onChange={handleChange}
          name="user_cnic"
          className="border border-gray-300 p-2 rounded-md mr-2 text-black w-full mb-2"
        >
          <option value="">Select CNIC</option>
          {userCnics.map(user_cnic => (
            <option key={user_cnic} value={user_cnic}>{user_cnic}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={person.age ?? ""}
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
        <textarea
          placeholder="Description"
          name="description"
          value={person.description}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md mr-2 text-black w-full mb-2"
        />
        {/* <input
          type="date"
          placeholder="Date Missing"
          name="dateMissing"
          value={person.dateMissing.toISOString().split("T")[0]} // Convert Date to string in "YYYY-MM-DD" format
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md mr-2 text-black w-full mb-2"
        />

        <input
          type="text"
          placeholder="Last Seen Location"
          name="lastSeenLocation"
          value={person.lastSeenLocation}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md mr-2 text-black w-full mb-2"
        /> */}
        <input
          type="text"
          placeholder="Contact Information"
          name="contact_information"
          value={person.contact_information}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md mr-2 text-black w-full mb-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddMissingPersonPage;

"use client";
import React, { useState } from 'react';
import { createUser } from '../../utils/users';
import { useRouter } from 'next/navigation';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      const user = await createUser({ email, password });
      // Handle successful sign-up
      console.log('User signed up:', user);
      router.push('/'); // Redirect to home page or dashboard
    } catch (error) {
      console.error('Sign up error:', error.message);
      setError(error.message); // Display error message to user
    }
  };

  return (
    <div
      className="py-28 bg-cover bg-center flex items-center justify-center h-[80vh]"
      style={{ backgroundImage: "url('/path/to/background-image.jpg')" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="border rounded px-3 py-2 mb-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded px-3 py-2 mb-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;

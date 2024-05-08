"use client";
import React, { useState, useEffect } from 'react';
import { createUser } from '../../utils/users';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [cnic, setCnic] = useState('');
  const router = useRouter();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      // User is already logged in, redirect to sign-in page with a message
      toast.success('You are already logged in!'); 
      router.push('/');
    }
  }, []);

  const handleSignUp = async () => {
    try {
      const user = await createUser({ email, password, cnic });
      // Handle successful sign-up
      console.log('User signed up:', user);
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      router.push('/'); // Redirect to home page or dashboard
    } catch (error) {
      console.error('Sign up error:', error);
      setError("Sign up error"); // Display error message to user
    }
  };

  return (
    <div
      className="py-28 bg-cover bg-center flex items-center justify-center h-[80vh] text-black"
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
        <input
          type="text"
          placeholder="CNIC"
          className="border rounded px-3 py-2 mb-2 w-full"
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
        />
        <button className="bg-blue-500 text-black px-4 py-2 rounded w-full" onClick={handleSignUp}>
          Sign Up
        </button>
        <p className="text-center mt-4">
          Already have an account?{' '}
          <a href="/auth/sign-in" className="text-blue-500 underline">
            Sign in here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

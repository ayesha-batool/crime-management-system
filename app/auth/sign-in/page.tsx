// pages/auth/signin.tsx
"use client";
import React, { useState } from 'react';
import { getUserByEmail } from '../../utils/users';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const user = await getUserByEmail(email);
      if (!user) {
        setError('User not found');
        return;
      }

      if (user.password !== password) {
        setError('Invalid password');
        return;
      }

      // Handle successful sign-in
      toast.success(
        "user signed in successfully"
      )
      localStorage.setItem('loggedInUser', JSON.stringify(user));

      router.push('/'); // Redirect to home page or dashboard
    } catch (error) {
      console.error('Sign in error:');
      // Handle sign-in error, e.g., show error message to user
    }
  };

  return (
    <div
    className="min-h-screen bg-cover bg-center flex items-center justify-center text-black"
    style={{ backgroundImage: "url('/path/to/background-image.jpg')" }}
  >
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Sign In</h1>
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
      <button className="bg-blue-500 text-white px-4 py-2 rounded w-full" onClick={handleSignIn}>
        Sign In
      </button>
    </div>
  </div>
  );
};

export default SignIn;

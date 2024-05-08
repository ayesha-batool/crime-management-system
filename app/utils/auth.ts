// utils/auth.ts
"use client"
export const getLoggedInUser = (): string | null => {
    return localStorage.getItem('loggedInUser');
  };
// utils/auth.ts
export const getLoggedInUserEmail = (): string | null => {
    if (typeof window === 'undefined') {
      // Check if running on the server-side
      return null; // Return null if localStorage is not available
    }
    const userJson = localStorage.getItem('loggedInUser');
    const user = userJson ? JSON.parse(userJson) : null;
    return user ? user.email : null;
  };
  
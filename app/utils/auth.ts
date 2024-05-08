// utils/auth.ts
"use client"
export const getLoggedInUser = (): string | null => {
    return localStorage.getItem('loggedInUser');
  };
  export const getLoggedInUserEmail = (): string | null => {
    const userJson = localStorage.getItem('loggedInUser');
    const user = userJson ? JSON.parse(userJson) : null;
    return user ? user.email : null;
  };
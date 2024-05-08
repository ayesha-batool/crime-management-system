// components/RequireAuth.tsx
"use client"
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const RequireAuth = (WrappedComponent: React.ComponentType) => {
  const AuthCheck = () => {
    const pathname = usePathname();
    const router = useRouter();
    
    useEffect(() => {
      // Check if user is authenticated
      const user = localStorage.getItem('loggedInUser');

      if (!user) {
        // If user is not logged in, redirect to signin page
        router.push('/auth/sign-in');
        toast.error('You need to be logged in to access this page');
      } else {
        const parsedUser = JSON.parse(user);
        // Check if user email is admin
        if (parsedUser.email === 'admin@gmail.com') {
          // Allow access to admin only routes
          return;
        } else {
          // If user is not admin, redirect only if trying to access admin routes
          if (
            pathname === '/add-missing-person' ||
            pathname === '/add-wanted-person'
          ) {
            router.push('/');
            toast.error('You need to be admin to access this page');
          }
        }
      }
    }, []);

    return <WrappedComponent />;
  };

  return AuthCheck;
};

export default RequireAuth;

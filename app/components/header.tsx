"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // State for login status
  const [adminLoggedIn, setAdminLoggedIn] = useState<boolean>(false); // State for admin login status

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.email === "admin@gmail.com" && parsedUser.password === "admin") {
        setIsLoggedIn(true);
        setAdminLoggedIn(true);
      } else {
        setIsLoggedIn(true);
      }
    }
  }, [isLoggedIn]); // Run effect only once on component mount
  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.email === "admin@gmail.com" && parsedUser.password === "admin") {
        setIsLoggedIn(true);
        setAdminLoggedIn(true);
      } else {
        setIsLoggedIn(true);
        setAdminLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
      setAdminLoggedIn(false);
    }
  }, [isLoggedIn]);
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Remove user from localStorage
    setIsLoggedIn(false); // Update login state
    setAdminLoggedIn(false); // Update admin login state
    window.location.href = "/"; // Redirect to homepage
  };

  const loggedInMenu = {
    "Missing Person": "/missing-persons",
    "Wanted Person": "/wanted-persons",
    "Checker": "/character-checker",
    "Report Crime": "/crime-list",
    ...(adminLoggedIn && {
      "Add Missing Person": "/add-missing-person",
      "Add Wanted Person": "/add-wanted-person",
    }),
  };

  const notLoggedInMenu = {
    "Women Help": "/women-help",
    "Safety Tips": "/safety-tips",
    "FAQs": "/faq",
    "Sign In": "/auth/sign-in",
  };

  return (
    <header className="bg-orange-500 text-white py-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <img src="/images.jpg" alt="Logo" className="h-20" />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4 items-center">
            {isLoggedIn ? (
              <>
                {/* Loop through logged-in menu items */}
                {Object.entries(loggedInMenu).map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="px-3 py-2 hover:bg-orange-600 transition duration-200 ease-in-out text-sm">
                      {label}
                    </Link>
                  </li>
                ))}
                {/* Logout button for logged-in users */}
                <li>
                  <button onClick={handleLogout} className="px-3 py-2 hover:bg-orange-600 transition duration-200 ease-in-out">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                {/* Loop through non-logged-in menu items */}
                {Object.entries(notLoggedInMenu).map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="px-3 py-2 hover:bg-orange-600 transition duration-200 ease-in-out text-sm">
                      {label}
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>
        </nav>
        <div className="md:hidden">
          <button className="text-white focus:outline-none" title="button">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

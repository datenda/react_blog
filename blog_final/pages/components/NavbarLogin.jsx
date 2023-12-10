// Import necessary modules
import Link from "next/link";
import { useRouter } from "next/router";
import { checkToken } from "../utils/auth";
import React, { useEffect, useState } from "react";

// Navbar component
const Navbar = () => {
  const router = useRouter();

  // List of pages where the navbar should be hidden
  const pagesWithoutNavbar = [
    "/pages/landingPage",
    "/pages/sign_up",
    "/pages/login",
  ];

  // Check if the current route is in the list of pages without the navbar
  const shouldShowNavbar = !pagesWithoutNavbar.includes(router.pathname);

  // State to store the token status
  const [hasToken, setHasToken] = useState(false);

  // UseEffect hook to run actions on route change
  useEffect(() => {
    const token = checkToken();
    setHasToken(!!token); // Update the state based on token presence
  }, [router.pathname]); // Run the effect on route change

  return shouldShowNavbar ? (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-xl font-bold">
          {/* Wrap the text inside the Link component */}
          <Link href="/">
            <div>Your App Name</div>
          </Link>
        </div>
        <div className="flex space-x-4">
          {/* Check if a token exists */}
          {hasToken ? (
            // If token exists, render profile button
            <Link href="/pages/profile">
              <div className="font-bold text-white bg-gray-900 px-4 py-2 rounded">
                Profile
              </div>
            </Link>
          ) : (
            // If no token, render login and sign up buttons
            <>
              <Link href="/pages/sign_up">
                <div className="font-bold px-4 py-2 rounded">Sign Up</div>
              </Link>
              <Link href="/pages/login">
                <div className="font-bold text-white bg-gray-900 px-4 py-2 rounded">
                  Login
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  ) : null; // Return null if the navbar should be hidden
};

export default Navbar;

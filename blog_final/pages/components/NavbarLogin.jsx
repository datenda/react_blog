// components/Navbar.js
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-xl font-bold">
          {/* Wrap the text inside the Link component */}
          <Link href="/">
            <div>Your App Name</div>
          </Link>
        </div>
        <div className="flex space-x-4">
          {/* Wrap the button inside the Link component */}
          <Link href="/pages/sign_up">
            <div className="font-bold px-4 py-2 rounded">Sign Up</div>
          </Link>
          {/* Wrap the button inside the Link component */}
          <Link href="/pages/login">
            <div className="font-bold text-white bg-gray-900 px-4 py-2 rounded">
              Login
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

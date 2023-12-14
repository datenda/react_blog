import Link from "next/link";
import { useRouter } from "next/router";
import { checkToken, removeToken } from "../utils/auth";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();

  const pagesWithoutNavbar = [
    "/pages/landingPage",
    "/pages/sign_up",
    "/pages/login",
    "/",
  ];

  const shouldShowNavbar = !pagesWithoutNavbar.includes(router.pathname);

  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = checkToken();
    setHasToken(!!token);
  }, [router.pathname]);

  const handleSignOut = () => {
    removeToken();
    setHasToken(false);
  };

  return shouldShowNavbar ? (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-xl font-bold">
          <Link href="/">
            <div>Your App Name</div>
          </Link>
        </div>
        <div className="flex space-x-4">
          {hasToken ? (
            <>
              <Link href="/pages/profile">
                <div className="font-bold text-white bg-gray-900 px-4 py-2 rounded">
                  Profile
                </div>
              </Link>
              <div
                className="cursor-pointer font-bold text-white bg-gray-900 px-4 py-2 rounded"
                onClick={handleSignOut}
              >
                Sign Out
              </div>
            </>
          ) : (
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
  ) : null;
};

export default Navbar;

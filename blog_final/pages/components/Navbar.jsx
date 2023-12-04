import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollPos = window.pageYOffset;
        const isScrollingUp = currentScrollPos < prevScrollPos;

        setIsNavbarVisible(isScrollingUp || currentScrollPos === 0);
        setPrevScrollPos(currentScrollPos);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [prevScrollPos]);

  return (
    <nav
      className={`px-4 bg-transparent fixed w-full transition-all ${
        isNavbarVisible ? "opacity-100" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="">
          <div className="flex space-x-4 items-center bg-red-700 rounded-b-lg pt-4">
            <button className="text-white hover:text-gray-300 focus:outline-none">
              <Link href="/pages/wiki">Wiki</Link>
            </button>{" "}
            <div className="border-l border-white h-2 pt-4"></div>
            <button className="text-white hover:text-gray-300 focus:outline-none">
              <Link href="/pages/forum">Forum</Link>
            </button>
            <div className="border-l border-white h-2 pt-4"></div>
            <button className="text-white hover:text-gray-300 focus:outline-none">
              <Link href="/pages/about_us">About Us</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

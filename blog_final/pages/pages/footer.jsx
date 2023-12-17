import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>123 Main St, Cityville, USA</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Connect With Us</h2>
            <div className="flex space-x-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <h2 className="text-xl font-bold mb-2">Newsletter</h2>
            <p>Subscribe to our newsletter for updates.</p>
            {/* Newsletter signup form or link */}
          </div>
        </div>
        <div className="mt-4 border-t border-gray-600 pt-4 text-sm text-center">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

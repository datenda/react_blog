import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 flex">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <div>Email: info@example.com</div>
            <div>Phone: +1 (555) 123-4567</div>
            <div>123 Main St, Cityville, USA</div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <div>
              <div>Home</div>
              <div>About Us</div>
              <div>Contact</div>
              <div>Privacy Policy</div>
              <div>Terms of service</div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <div className="text-xl font-bold mb-2">Connect With Us</div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <div className="text-xl font-bold mb-2">Newsletter</div>
            <div>Subscribe to our newsletter for updates.</div>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-600 pt-4 text-sm text-center">
          <div>&copy; 2023 Your Company. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

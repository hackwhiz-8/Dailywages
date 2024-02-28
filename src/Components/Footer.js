import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 mt-10">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </p>
        <nav className="flex space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
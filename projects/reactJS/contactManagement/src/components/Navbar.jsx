import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <h1 className="text-xl font-bold">My contacts</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/contacts" className="hover:bg-blue-500 px-3 py-2 rounded-md">
            Contacts
          </Link>
          <Link to="/create-contact" className="hover:bg-blue-500 px-3 py-2 rounded-md">
            Create Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed z-50 inset-0 bg-blue-600 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center mt-10 space-y-4">
          <Link to="/contacts" className="text-white text-xl hover:bg-blue-500 px-6 py-3 rounded-md" onClick={() => setIsOpen(false)}>
            Contacts
          </Link>
          <Link to="/create-contact" className="text-white text-xl hover:bg-blue-500 px-6 py-3 rounded-md" onClick={() => setIsOpen(false)}>
            Create Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

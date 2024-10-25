import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 h-[10%]">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 py-6">
        <Link className="text-2xl font-semibold text-blue-700" to="/">
          Experts Management
        </Link>
        <ul className="font-medium flex space-x-8">
          <li>
            <Link className="py-2 px-3 text-blue-700 hover:bg-gray-100 rounded" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="py-2 px-3 text-blue-700 hover:bg-gray-100 rounded" to="/create">
              Create Expert
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

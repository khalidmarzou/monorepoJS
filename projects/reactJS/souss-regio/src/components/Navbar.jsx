import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/question_1", label: "Question 1" },
    { path: "/question_2_3", label: "Question 2 et 3" },
    { path: "/question_4", label: "Question 4" },
    { path: "/partie_redux", label: "Partie Redux" },
    { path: "/pwd", label: "pwd pattern" },
  ];

  return (
    <nav className="bg-indigo-600 p-4 shadow-md w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">Regional Exam 2024</h1>
        <div className="space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-white transition duration-300 ${location.pathname === item.path ? "underline font-bold" : "hover:text-indigo-200"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="bg-white h-full w-full">
    <div className="py-16 px-4 h-full w-full">
      <div className="text-center flex flex-col items-center justify-center h-full">
        <h1 className="text-9xl font-extrabold text-blue-600 mb-4">404</h1>
        <p className="text-4xl font-bold text-gray-900 mb-4">Something's missing.</p>
        <p className="text-lg text-gray-500 mb-8">Sorry, we can't find this page. You'll find lots to explore on the home page.</p>
        <Link
          to="/"
          className="bg-blue-600 text-white font-semibold rounded-sm text-sm px-6 py-3 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  </section>
);

export default NotFound;

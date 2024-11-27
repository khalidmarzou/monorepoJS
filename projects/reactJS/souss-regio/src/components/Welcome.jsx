import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex w-full items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-teal-500">
      <div className="text-center text-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-4">Welcome to the 2024 Regional Exam Correction</h1>
        <p className="text-lg mb-6">We are ready to assist you with the correction process for the 2024 exams in the Souss Massa region.</p>
        <p className="text-sm mb-8 italic">
          <span className="font-semibold">Souss Massa</span> – A region known for its rich culture and academic excellence.
        </p>
        <Link to={"/question_1"} className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-md text-lg">
          Start Correction
        </Link>
      </div>
    </div>
  );
};

export default Welcome;

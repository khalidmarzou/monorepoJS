import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold text-gray-950 mb-4 text-center">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">Sorry, the page you are looking for does not exist.</p>
      <Link to="/contacts" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;

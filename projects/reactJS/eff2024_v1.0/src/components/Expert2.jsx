import Expert from "./Expert";
import { useQuery } from "react-query";
import axios from "axios";

const fetchExperts = async () => {
  const response = await axios.get("http://localhost:3000/experts");
  return response.data;
};

export default function Expert2() {
  const { data: experts, error, isLoading } = useQuery("expertsQuery", fetchExperts);

  if (isLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-red-100">
        <div className="text-center space-y-4 p-6 bg-white rounded-lg shadow-lg border border-red-500 animate-pulse">
          <div className="text-5xl">⚠️</div>
          <h1 className="text-3xl font-bold text-red-600">Oops! Something went wrong</h1>
          <p className="text-lg text-red-500">{error.message}</p>
          <button onClick={() => window.location.reload()} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <h2 className="mb-2 text-2xl font-semibold text-red-900 text-center">List des Experts2 (API) :</h2>
      <ul className="w-5/6 space-y-1 text-gray-500 list-disc list-inside px-5 flex flex-col gap-10">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert} />
        ))}
      </ul>
    </>
  );
}

const ErrorContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold text-gray-950 mb-4 text-center">500 - Internal Server Error</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">Error fetching contact details.</p>
    </div>
  );
};

export default ErrorContainer;

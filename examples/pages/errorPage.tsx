import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-red-500 text-white p-8 rounded-md shadow-md">
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    </div>
  );
};

export default ErrorPage;

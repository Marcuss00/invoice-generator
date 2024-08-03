import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grid grid-cols-1 md:grids-cols-2 border-2 gap-1 mx-2 my-4 p-2 md:grid-cols-50/50 lg:grid-cols-60/40 rounded-md">
      <div className="w-full border-gray-300 border-b md:border-r md:border-b-0 mx-auto px-4 lg:pr-72 xl:pr-96">
        <div className="flex flex-col justify-center items-center py-12">
          <h1 className="text-4xl font-bold text-gray-700 mb-4">404</h1>
          <p className="text-lg text-gray-500 mb-4">Page Not Found</p>
          <Link to="/" className="bg-indigo-500 px-6 py-2 rounded-sm border-none text-white hover:bg-indigo-600 active:bg-indigo-600 hover:shadow-md font-bold focus:outline-none">
            Go to Home
          </Link>
        </div>
      </div>
      <div className="w-full mx-auto px-4">
        <div className="text-gray-500 flex flex-col items-center py-12">
          <p className="text-lg">Oops! The page you are looking for does not exist.</p>
          <Link to="/about" className="mt-4 bg-indigo-500 px-6 py-2 rounded-sm border-none text-white hover:bg-indigo-600 active:bg-indigo-600 hover:shadow-md font-bold focus:outline-none">
            Go to About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

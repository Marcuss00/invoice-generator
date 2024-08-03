import React from 'react';



const DeleteButton = ({ size = 'medium', color = 'red'}) => {
 
  

 
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
  };

  const colorClasses = {
    red: 'text-red-500 hover:text-red-700',
    gray: 'text-gray-500 hover:text-gray-700',
    blue: 'text-blue-500 hover:text-blue-700'
  };

  return (
    <button
    
      className={`${sizeClasses[size] || sizeClasses.medium} ${colorClasses[color] || colorClasses.red} focus:outline-none transition-colors duration-200`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>
  );
};

export default DeleteButton;
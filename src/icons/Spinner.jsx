import React from 'react';

const Spinner = ({ size = 'medium', color = 'blue' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12', 
    Extralarge: 'w-16 h-16'
  };

  const colorClasses = {
    blue: 'border-blue-600',
    green: 'border-green-500',
    red: 'border-red-500',
    yellow: 'border-yellow-500',
    gray: 'border-gray-500'
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`
          ${sizeClasses[size] || sizeClasses.medium}
          ${colorClasses[color] || colorClasses.blue}
          animate-spin rounded-full border-4 border-b-2 border-t-2 border-b-transparent border-t-transparent
        `}
      />
    </div>
  );
};

export default Spinner;
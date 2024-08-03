import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">About Our Invoice Application</h1>
        <p className="text-gray-600 mb-4">
          Our invoice application is designed to help you manage your invoices efficiently and effectively. Whether you are a small business owner or a freelancer, our tool offers the features you need to keep track of your billing and payments.
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Features</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Create and manage invoices easily</li>
            <li>Track payments and due dates</li>
            <li>Generate downloadable reports</li>
            <li>Secure and reliable</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to provide a simple and effective invoicing solution that meets the needs of our users. We believe in the power of simplicity and strive to make our application as user-friendly as possible.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Team</h2>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-700 mb-2">John Doe</h3>
                <p className="text-gray-600">Lead Developer</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-700 mb-2">Jane Smith</h3>
                <p className="text-gray-600">Project Manager</p>
              </div>
            </div>
            
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions or feedback, please feel free to reach out to us at <a href="mailto:BillGenius@gmail.com" className="text-indigo-500">BillGenius@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

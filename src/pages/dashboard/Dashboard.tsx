import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-4">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-bold mb-2">Card 1</h2>
              <p className="text-gray-700">Content for card 1.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-bold mb-2">Card 2</h2>
              <p className="text-gray-700">Content for card 2.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-bold mb-2">Card 3</h2>
              <p className="text-gray-700">Content for card 3.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

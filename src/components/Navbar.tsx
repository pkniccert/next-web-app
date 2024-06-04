import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Dashboard</div>
        <div className="text-white">
          <a href="#" className="px-4">Home</a>
          <a href="#" className="px-4">Profile</a>
          <a href="#" className="px-4">Logout</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
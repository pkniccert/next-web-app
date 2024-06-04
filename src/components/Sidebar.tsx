import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-4 font-bold">Menu</div>
      <ul>
        <li className="p-4 hover:bg-gray-700"><a href="#">Dashboard</a></li>
        <li className="p-4 hover:bg-gray-700"><a href="#">Settings</a></li>
        <li className="p-4 hover:bg-gray-700"><a href="#">Profile</a></li>
        <li className="p-4 hover:bg-gray-700"><a href="#">Help</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
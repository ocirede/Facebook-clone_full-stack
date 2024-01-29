// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://placekitten.com/50/50"
            alt="Facebook Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-2xl font-bold">Facebook</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-blue-500 hover:underline">Home</button>
          <button className="text-blue-500 hover:underline">Profile</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

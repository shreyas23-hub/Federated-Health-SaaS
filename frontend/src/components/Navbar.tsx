import React from 'react';
export const Navbar = () => (
  <nav className="bg-white shadow flex items-center px-8 py-3">
    <img src="/assets/logo.svg" className="h-10 mr-4" alt="logo" />
    <span className="text-blue-700 text-lg font-bold">Federated Health SaaS</span>
    <div className="ml-auto space-x-4">
      <a href="/login" className="text-gray-600 hover:text-blue-500">Login</a>
      <a href="/register" className="text-gray-600 hover:text-blue-500">Register</a>
    </div>
  </nav>
);
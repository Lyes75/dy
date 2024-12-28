import React from 'react';
import { Activity } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Activity className="h-6 w-6" />
            <h1 className="text-xl sm:text-2xl font-bold">DeFiYield.io</h1>
          </div>
        </div>
      </div>
    </header>
  );
}
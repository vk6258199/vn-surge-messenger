
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Mail className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-gray-900">VN Sender</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#features" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
              Features
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
              Benefits
            </a>
            <a href="#screenshots" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
              Screenshots
            </a>
            <a href="#faq" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
              FAQ
            </a>
          </div>
          <div>
            <Button>Download Now</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

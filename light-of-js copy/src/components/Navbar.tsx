import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

import logo from '@/assets/logo1.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  


  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Lights of Happiness" className="h-16 w-16" />
            <span className="text-2xl font-bold text-gray-800">
              Lights Of Happiness
            </span>
          </Link>

          {/* Desktop Navigation */}
          

         
        </div>

        {/* Mobile Navigation */}
    
      </div>
    </nav>
  );
};

export default Navbar;
// app/_components/Navbar.tsx
import React from 'react';
import { FiMenu } from 'react-icons/fi'; // Hamburger menu icon

const Navbar = () => {
  return (
    <nav className="bg-brand-dark text-white p-6 flex justify-between items-center">
      <a href="#" className="font-bold text-2xl">Saurabh Rai</a>
      <button>
        <FiMenu size={24} />
      </button>
    </nav>
  );
};

export default Navbar;
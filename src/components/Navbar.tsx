import { FaBell, FaSearch, FaChevronDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="flex items-center justify-between px-4 py-3 md:px-12">
        <div className="flex items-center space-x-8">
          <div className="text-red-600 font-bold text-3xl tracking-tighter">NETFLIX</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">Home</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">TV Shows</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">Movies</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">New & Popular</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">My List</a>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <FaSearch className="text-white text-xl cursor-pointer hover:text-gray-300 transition-colors duration-200" />
          <FaBell className="text-white text-xl cursor-pointer hover:text-gray-300 transition-colors duration-200" />
          <div className="flex items-center space-x-2 cursor-pointer group">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
              <span className="text-white font-medium">U</span>
            </div>
            <FaChevronDown className="text-white text-sm group-hover:rotate-180 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </nav>
  );
}
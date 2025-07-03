import { FaSearch, FaUserCircle } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/" className="text-2xl font-bold text-blue-400">BetWise</Link>
        </div>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/matches" className="hover:text-blue-400 transition">Live Matches</Link>
          <Link to="/history" className="hover:text-blue-400 transition">My Bets</Link>
          <Link to="/rules" className="hover:text-blue-400 transition">Rules</Link>
          <Link to="/wallet" className="hover:text-blue-400 transition">Wallet</Link>
        </nav>

        {/* Search & Profile */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          
          {/* Search bar */}
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-gray-700 rounded-md px-3 py-1"
          >
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search matches..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="bg-transparent outline-none text-white placeholder-gray-400 text-sm w-36 md:w-48"
            />
          </form>

          {/* User Icon */}
          <Link to="/account" className="text-white hover:text-blue-400 text-2xl">
            <FaUserCircle />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

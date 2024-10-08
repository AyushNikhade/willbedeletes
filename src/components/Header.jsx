import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

function Header({ user, setUser, refreshToken, setRefreshToken}) {
  const handleLogout = ()=>{
    Cookies.remove('refreshToken');
    setRefreshToken(null)
  }

  return (
    <header className="header flex items-center justify-between px-6 py-2 shadow-md">
      {/* Logo Section */}
      <div className="header__logo">
        <img src="" alt="" className="w-12 h-12" />
      </div>

      {/* Navigation Links */}
      <nav className="header__content space-x-6">
        <Link to="/" className="hover:text-indigo-400 transition-colors duration-300">
          <span>Home</span>
        </Link>
        <Link to="/abuse-report-form" className="hover:text-indigo-400 transition-colors duration-300">
          <span>Submit Report</span>
        </Link>
        <Link to="/my-reports" className="hover:text-indigo-400 transition-colors duration-300">
          <span>My Report</span>
        </Link>
        <Link to="/authority-all-reports" className="hover:text-indigo-400 transition-colors duration-300">
          <span>All Reports</span>
        </Link>
      </nav>

      {/* Login/Signup Button */}
      <div className="header__right">
        {refreshToken ? <Link to="/login">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
            Login/Signup
          </button>
          </Link>
          : 
          <button onClick={handleLogout} className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
            Logout
          </button>
        }
      </div>

    </header>
  );
}

export default Header;

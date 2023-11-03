import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        ShowTimeSquad
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/users" className="nav-link">
              Users
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              onClick={toggleDropdown}
              href='/'
            >
              Manage Movies
            </a>
            <div
              className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link to="/add-movie-form" className="dropdown-item" onClick={toggleDropdown}>
                Add Movie
              </Link>
              <Link to="/view-movie-list" className="dropdown-item" onClick={toggleDropdown}>
                View Movie List
              </Link>
            </div>
          </li>
          
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
          </li>
        </ul>
        <p>{localStorage.getItem('username')}</p>
      </div>
    </nav>
  );
}

export default Nav;

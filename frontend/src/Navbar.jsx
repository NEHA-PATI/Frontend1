import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaLeaf, FaBars, FaUsers, FaBlog, FaBriefcase,
  FaBookOpen, FaInfoCircle, FaEnvelope, FaUserPlus, FaUserTie
} from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ openLoginPopup, openSignupPopup }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <>
      <nav className="home-navbar">
       <div className="navbar-left">
  <FaBars className="menu-icon" onClick={handleSidebarToggle} style={{ fontSize: '1.8rem' }} />
  <img src="/logo.jpg" alt="Carbon Credit Logo" className="logo-icon" />
  <span className="logo-text">Carbon Credit</span>
</div>

        <div className="navbar-right">
          <FaUserTie
            className="menu-icon"
            style={{ fontSize: '1.8rem', cursor: 'pointer', color: '#2e7d32' }}
            onClick={openLoginPopup}
          />
        </div>
      </nav>

      {sidebarOpen && (
        <div ref={sidebarRef} className="sidebar-dropdown">
          <NavLink to="/community" className="sidebar-item">
            <FaUsers className="sidebar-icon" color="#28a745" />
            <span>Community</span>
          </NavLink>
          <NavLink to="/blog" className="sidebar-item">
            <FaBlog className="sidebar-icon" color="#ff5722" />
            <span>Blog</span>
          </NavLink>
          <NavLink to="/case-studies" className="sidebar-item">
            <FaBookOpen className="sidebar-icon" color="#17a2b8" />
            <span>Case Studies</span>
          </NavLink>
          <NavLink to="/careers" className="sidebar-item">
            <FaBriefcase className="sidebar-icon" color="#6f42c1" />
            <span>Careers</span>
          </NavLink>
          <NavLink to="/about" className="sidebar-item">
            <FaInfoCircle className="sidebar-icon" color="#fd7e14" />
            <span>About Us</span>
          </NavLink>
          <NavLink to="/contact" className="sidebar-item">
            <FaEnvelope className="sidebar-icon" color="#20c997" />
            <span>Contact Us</span>
          </NavLink>
          <div className="sidebar-item" onClick={openSignupPopup} style={{ cursor: 'pointer' }}>
            <FaUserPlus className="sidebar-icon" color="#ffc107" />
            <span>Sign Up</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

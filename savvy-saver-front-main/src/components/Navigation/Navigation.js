import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo-2.svg';

const CustomNavLink = ({ to, children, isActive, onClick }) => {
  return (
    <NavLink
      to={to}
      className={`menu-item ${isActive ? 'active-link' : ''}`}
      activeclassname='active-link'
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
};

const Navigation = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = async (to) => {
    setActiveLink(to);

    const targetElement = document.getElementById(to.replace('/', ''));

    if (targetElement) {

      await new Promise(resolve => setTimeout(resolve, 100));


      window.scrollTo ({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className='app-menu'>
      <div className="menu-header">
        <Logo className='currency-logo' />
      </div>
      <div className="menu-links">
        <CustomNavLink to='/time-travel' isActive={activeLink === '/time-travel'} onClick={() => handleLinkClick('/time-travel')}>
          Time Travel
        </CustomNavLink>
        <CustomNavLink to='/investments-options' isActive={activeLink === '/investments-options'} onClick={() => handleLinkClick('/investments-options')}>
          Investments Options
        </CustomNavLink>
        <CustomNavLink to='/learn-more' isActive={activeLink === '/learn-more'} onClick={() => handleLinkClick('/learn-more')}>
          Learn More
        </CustomNavLink>
      </div>
    </nav>
  );
};

export default Navigation;

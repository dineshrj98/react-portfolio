// Header.jsx

import React from 'react';
import './Header.css'; // Importing CSS styles
import CTA from './CTA'; // Importing CTA component
import HeaderSocials from './HeaderSocials'; // Importing HeaderSocials component

// Header component
const Header = () => {
  return (
    // Header section with unique ID
    <header id='home'>

      {/* Container for header content */}
      <div className="container header__container">

        {/* Welcome message */}
        <h5>Hello, I'm</h5>

        {/* User name */}
        <h1>Dinesh Ezhil</h1>

        {/* User description */}
        <h5 className="text-light">Master’s Student at QUT | Ex-Data Scientist</h5>

        {/* Call to action button */}
        <CTA />

        {/* Social media links */}
        <HeaderSocials />

        {/* Scroll down link */}
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  );
}

export default Header; // Exporting Header component


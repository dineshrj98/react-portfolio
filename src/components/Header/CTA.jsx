// CTA.jsx

import React from 'react'; // Importing React library
import CV from '../../assets/Dinesh-Ezhil-Bio-Data-New.pdf'; // Importing CV file path

// CTA component
const CTA = () => {
  return (
    // Container for call-to-action buttons
    <div className="cta">
      {/* Download CV button */}
      <a href={CV} download className='btn'>Download CV</a>
      {/* Contact Me button */}
      <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  );
}

export default CTA; // Exporting CTA component

// CTA.jsx

import React from 'react'; // Importing React library
import CV from '../../assets/Dinesh_Ezhilmurugu_Master_Resume_.pdf'; // Importing CV file path

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

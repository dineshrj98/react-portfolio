// HeaderSocials.jsx

import React from 'react'; // Importing React library
import { BsLinkedin, BsGithub, BsMedium } from 'react-icons/bs'; // Importing icons from react-icons library

// HeaderSocials component
const HeaderSocials = () => {
  return (
    // Container for header social links
    <div className="header__socials">

      {/* LinkedIn link */}
      <a href="https://www.linkedin.com/in/dinesh-ezhil101?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXqnVjltzQ4ePsqG%2FPnOFyw%3D%3D" target="_blank" rel='noreferrer'>
        <BsLinkedin />
      </a>

      {/* GitHub link */}
      <a href="https://github.com/dineshrj98" target="_blank" rel='noreferrer'>
        <BsGithub />
      </a>

      {/* Medium link */}
      <a href="https://medium.com/@dino360" target="_blank" rel='noreferrer'>
        <BsMedium />
      </a>
    </div>
  );
}

export default HeaderSocials; // Exporting HeaderSocials component

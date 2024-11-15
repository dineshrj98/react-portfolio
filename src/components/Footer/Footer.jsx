import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>DINESH</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#githubportfolio">Projects and Hobbies</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/dinesh-ezhil101?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXqnVjltzQ4ePsqG%2FPnOFyw%3D%3D"><BsLinkedin/></a>
          <a href="https://github.com/dineshrj98"><BsGithub/></a>
          <a href="https://medium.com/@dino360"><BsMedium/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Dinesh Ezhil. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer
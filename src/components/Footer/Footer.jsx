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
          <a href="https://au.linkedin.com/in/dinesh-ezhil-7605b12b8"><BsLinkedin/></a>
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
import React from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {FaLaptopCode} from 'react-icons/fa'
import {GoGitBranch} from 'react-icons/go'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'




const Navbar = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (
    
    <nav>
      
       <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
       <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><BiUser/></a>
       <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><FaLaptopCode/></a>
       <a href="#githubportfolio" onClick={() => setActiveNav('#githubportfolio')} className={activeNav === '#githubportfolio' ? 'active': ''}><GoGitBranch/></a>
       <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><BiMessageSquareDetail/></a>
      
    </nav>
  )
}

export default Navbar
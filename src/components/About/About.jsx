import React from 'react';
import Kanye from './KanyeAPI'; // Import Kanye component
import myImage from '../../assets/flip_img.png'; // Import image
import { GiGraduateCap } from 'react-icons/gi'; // Import GiGraduateCap icon
import { BsBookmarkStar } from 'react-icons/bs'; // Import BsBookmarkStar icon
import { TfiWorld } from 'react-icons/tfi'; // Import TfiWorld icon
import './About.css'; // Import CSS file

const About = () => {
  return (
    <section id='about'>
      {/* Section heading */}
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      {/* Kanye quote container */}
      <div className="kanye-container">
        <h5> Refresh to discover Kanye's latest wisdom for the world! </h5>
        <Kanye />
      </div>

      {/* About me container */}
      <div className="container about__container">
        {/* Image container */}
        <div className="about__me">
          <div className="about__me-image">
            {/* Display image */}
            <img src={myImage} alt="Me" />
          </div>
        </div>

        {/* Content container */}
        <div className="about__content">
          {/* About cards container */}
          <div className="about__cards">
            {/* Degree card */}
            <article className='about__card'>
              <GiGraduateCap className='about__icon'/> {/* Display GiGraduateCap icon */}
              <h5>Degree</h5>
              <small>Masters of Data Analytics(Current) <br /><i>Queensland University of Technology</i></small>
            </article>

            {/* Current GPA card */}
            <article className='about__card'>
              <BsBookmarkStar className='about__icon'/> {/* Display BsBookmarkStar icon */}
              <h5>Current GPA</h5>
              <small>5.37</small>
            </article>

            {/* Domains card */}
            <article className='about__card'>
              <TfiWorld className='about__icon'/> {/* Display TfiWorld icon */}
              <h5>Domains</h5>
              <small>
                <ul>
                  {/* List of domains */}
                  <li>Data Analysis and Machine Learning</li>
                  <li>Cloud Solutions</li>
                  <li>Mobile and Web Apps</li>
                </ul>
              </small>
            </article>
          </div>
          {/* Paragraph describing about me */}
          <p>
            I'm a <b>Master’s Student</b> at the Queensland University of Technology. Previously, I worked as a 
            data scientist at Positive Integers Pvt Ltd, I applied my skills in MLOps, Amazon Athena, and Git BASH to
            deliver data-driven solutions for various clients and projects. I also contributed to a publication on product
            billing using RFID reader and cloud storage in 2019. With a postgraduate diploma in data science and
            artificial intelligence from Imarticus Learning, I have a strong foundation in data analysis, machine learning,
            and programming. I am learning advanced techniques and tools for solving complex data problems. My goal is 
            to leverage my education and experience to create innovative and impactful data products for social good.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

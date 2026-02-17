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
              <small>4.9</small>
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
            I'm a results-driven Data Scientist with over 2 years of experience in analytics and data optimization. 
            Achieved a 40% reduction in deployment time through the enhancement of CI/CD pipelines. Skilled in Python, SQL, and AWS, leveraging 
            these technologies to develop innovative data solutions that streamline processes and drive business insights
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

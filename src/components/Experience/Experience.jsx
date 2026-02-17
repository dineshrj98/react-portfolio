import React from 'react';
import './Experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>

      {/* Section title */}
      <h5>The skills I have</h5>
      <h2>My Experience</h2>

      {/* Container for experience content */}
      <div className="container experience__container">

        {/* Frontend development section */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          {/* Frontend content */}
          <div className="experience__content">

            {/* Frontend details */}
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>ReactJs</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>

        {/* Backend development section */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          {/* Backend content */}
          <div className="experience__content">
            {/* Backend details */}
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>AWS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>R</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

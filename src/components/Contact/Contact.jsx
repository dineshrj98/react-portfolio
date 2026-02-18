import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {

  return (
    <section id='contact'> 

      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container map_display">
          <iframe
            title="map"
            style={{ filter: "opacity(0.6)" }}
            src="https://maps.google.com/maps?q=131 Summerfields Dr, Caboolture QLD 4510, Australia&t=&zoom=15&maptype=roadmap&ie=UTF8&iwloc=&output=embed"
          />
      </div> 
      <h2> </h2>
      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dineshezhilmurugu@gmail.com</h5>
            <a href="mailto:dineshezhilmurugu@gmail.com">Send a message</a>
          </article>
        </div>

      </div>    
    </section>
  )
}

export default Contact


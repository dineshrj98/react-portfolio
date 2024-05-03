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
            src="https://www.google.com/maps/embed/v1/place?q=73+Silkyoak+Circuit,+Fitzgibbon+QLD,+Australia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
      </div> 
      <h2> </h2>
      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dino360@duck.com</h5>
            <a href="mailto:dino360@duck.com">Send a message</a>
          </article>
        </div>

      </div>    
    </section>
  )
}

export default Contact


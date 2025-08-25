import React from 'react'
import { useRef } from 'react';
import './contact.css';
import Logo1 from '../../asset/logo1.png';
import Logo2 from '../../asset/logo2.png';
import Logo3 from '../../asset/logo3.png';
import Logo4 from '../../asset/logo4.png';
import facebookicon from '../../asset/facebookicon.png';
import twitericon from '../../asset/twitericon.png';
import instagramicon from '../../asset/instagramicon.png';
import youtubeicon from '../../asset/youtubeicon.jpg';
import emailjs from '@emailjs/browser';




const Contact = () => {
   const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };






  return (
    <section id="contactpage">
        <div id="clients">
            <h1 className="contactpagetitle">My Clients</h1>
            <p className="clientdes">
                I have had the opputunity to work with a diverse group of companies. Some of the notable companies I have worhed with includes
            </p>
            <div className="clientimgs">
                <img src={Logo1} alt="clients" className="clientimg" />
                <img src={Logo2} alt="clients" className="clientimg" />
                <img src={Logo3} alt="clients" className="clientimg" />
                <img src={Logo4} alt="clients" className="clientimg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactpagetitle">Contact Me</h1>
            <span className="contactdes">
              Please fill out the form below to discuss any work opputunities.
            </span>
            <form className="contactform" ref={form} onSubmit={sendEmail} >
              <input type="text" className="name" placeholder='Your Name' />
              <input type="email" className="email" placeholder='Your Email' />
              <textarea className='msg' name="message" placeholder='Your Message' rows="10"></textarea>
              <button type="submit" className="submitbtn" value='send'>Submit</button>
              <div className="links">
                    <img src={facebookicon} alt="" className="link" />
                    <img src={twitericon} alt="" className="link" />
                    <img src={instagramicon} alt="" className="link" />
                    <img src={youtubeicon} alt="" className="link" />

              </div> 
              
            </form>
        </div>
    </section>

  )
}

export default Contact

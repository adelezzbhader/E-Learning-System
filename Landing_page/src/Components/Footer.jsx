import React from 'react';
import '../Footer.css'; 
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer className="footer" id="Footer"  data-aos="fade-up">
        <div className="footer-top">
          <div className="footer-logo">
          <img className="logo" src="images/nlogo.png" alt="" srcset=""/>
          </div>
          <div className="footer-contact">
            <h2>Contact Us</h2>
            <p>Email: <a href="mai@gmail.com">Bassatha@gmail.com</a></p>
            <p>Phone: <a href="tel:+20 1002051752">+20 100 205 17 52</a></p>
            <p>Address: Bani Sweif - New Bani Sweif City</p>
          </div>
          <div className="footer-socials">
            
          <h2>Follow Us</h2>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
        </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Courses Website. All rights reserved.</p>
        </div>
      </footer>
    );
  };

export default Footer;

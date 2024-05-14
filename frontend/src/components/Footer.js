import React from 'react';
import './Footer.css'; // Import the external CSS file
import instagram_icon from '../assest/instagram_icon.png';
import { Link } from 'react-router-dom';

import pintester_icon from '../assest/pintester_icon.png';
import whatsapp_icon from '../assest/whatsapp_icon.png';
import logo1 from '../assest//logo1.png';

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo1} alt="" style={{ width: '120px', height: 'auto' }} />
        <p>HM SHOP</p>
      </div>
      <ul className="footer-link">
      <Link to={"/contact"} style={{ marginRight: '10px', color: 'red' }}>contact</Link>
        <li>products</li>
        <li>offices</li>
        <li>about</li>
        
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right reserved. </p>
      </div>
    </div>
  );
}

export default Footer;

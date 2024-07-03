import React from 'react';
import './card.css';
import logo from '../images/Logogif.gif';
import user from '../images/user.png';
import web from '../images/web.png';
import emailimage from '../images/emailimage.png';
import w from '../images/w.png';
import youtube from '../images/youtube.png';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';

const Card = ({ formData }) => (
  <div id="card">
    <div id="probably">
      <div id="employee-photo-container">
        <img id="employee-photo" src={formData.photo || user} alt="Employee" />
      </div>
      <p id="employee-name"><strong>{formData.fullName}</strong></p>
      <p id="employee-designation"><strong>Designation:</strong> {formData.designation}</p>
      <p id="employee-whatsapp"><strong>WhatsApp:</strong> {formData.whatsapp}</p>
      <p id="employee-linkedin"><strong>Linkedin Id:</strong> {formData.linkedin}</p>
      <p id="employee-instagram"><strong>Instagram Id:</strong> {formData.instagram}</p>

      <div id="logo-container">
        <img src={logo} alt="Your Logo" />
      </div>

      <div id="card-right-smedia">
        <a href="https://www.inspirexp.com"><img src={web} alt="Website" /></a>
        <a href="mailto:hello@inspirexp.com"><img src={emailimage} alt="Email" /></a>
        <a href="https://api.whatsapp.com/send?phone=917044703370"><img src={w} alt="WhatsApp" /></a>
        <a href="https://www.youtube.com/@_InspireXP"><img src={youtube} alt="YouTube" /></a>
        <a href="https://www.linkedin.com/company/inspirexp/"><img src={linkedin} alt="LinkedIn" /></a>
        <a href="https://www.instagram.com/_inspirexp/"><img src={instagram} alt="Instagram" /></a>
      </div>
    </div>
  </div>
);

export default Card;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emsImage from '../assets/emsimage.png';
const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>About Us</h2>
          <p>
          In the dynamic landscape of modern business, the effective management of human resources stands as a cornerstone of success. As organizations strive to optimize performance, nurture talent, and drive growth, the role of an employee management system emerges as a critical enabler.
           This comprehensive guide delves into the depths of what an employee management system entails, its fundamental responsibilities, why it matters, the benefits it brings, and how to choose the best fit for your organization.
          </p>
        </div>
        <div className="col-md-6">
        <img src={emsImage} alt="About Us" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default About;

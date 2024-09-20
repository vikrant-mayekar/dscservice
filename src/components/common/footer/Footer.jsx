import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <img 
              src="./logo.png" 
              alt="DSC Support Solutions" 
              style={{ width: '200px', height: 'auto' }} 
            />
            <p>Empowering Expert Telecalling Solutions for Unmatched Client Engagement.</p>
            <div className="social-icons">
              <i className="fab fa-facebook-f icon"></i>
              <i className="fab fa-twitter icon"></i>
              <i className="fab fa-instagram icon"></i>
            </div>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Career</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className="box">
            <h3>
              Subscribe to our Newsletter
            </h3>
            <span>You’ll get an email about once a month. We’ll never share your address.</span>
            <div className="right row">
	            <input type="text" placeholder="Enter Email" />
      	      <button type="submit" className="subscribe-btn">
        	      Subscribe
      	      </button>
            </div>
          </div>
           
          <div className="box last">
            <h3>Have a Question?</h3>
            <ul>
              <li>
                <i className="fa fa-map" style={{ marginRight: "50px" }}></i>
                 <br />  Office number 406, 4th floor, Sukhwani Boulevard Commerz,
                Survey No. 85, 1, Pashan - Sus Rd, above Domino's, Sus, Pune, Maharashtra 411021
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +91 9082386654
              </li>
              <li>
                <i className="fa fa-paper-plane" ></i>
                contact@dscservice.in
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright ©2024 All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;

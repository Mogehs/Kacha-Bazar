import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-5 mt-5">
      <div className="container">
        <div className="row footer">
          {/* Column 1: About Us */}
          <div className="col-md-4 mb-4">
            <h5 className="text-dark">About Us</h5>
            <p className="text-muted">
              We are a company committed to providing the best services for our
              customers. Stay connected to learn more about us and our
              offerings.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-4 mb-5 mt-5">
            {" "}
            {/* Large gap between sections */}
            <h5 className="text-dark">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-muted">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-muted">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-muted">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-auto icons">
          {" "}
          {/* Pushes the "Follow Us" section to the bottom */}
          {/* Column 3: Social Media (Follow Us) */}
          <div className="col-md-12 text-center">
            <h5 className="text-dark">Follow Us</h5>
            <div className="d-flex justify-content-center">
              <a href="#" className="text-muted me-3">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-muted me-3">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-muted me-3">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-muted">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4 hr" />

        {/* Copyright Section */}
        <div className="text-center ms-5 ">
          <p className="text-muted mb-0 copyright">
            &copy; 2025 Your Kacha Bazar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="top_header">
        <section>
          <span>
            <i className="fa fa-map-marker"></i>
          </span>
          <span>Street, full address, state/province, country, pincode</span>
        </section>
        <section>
          <span>
            <i className="fa fa-phone"></i>
          </span>
          <span>(00) 0000 0000</span>
        </section>
        <section>
          <span>
            <i className="fa fa-envelope"></i>
          </span>
          <span>info@websitename.com</span>
        </section>
      </div>
      <span className="border-shape"></span>
      <div className="bottom_content">
        <section>
          <a>
            <i className="fa fa-facebook"></i>
          </a>
          <a>
            <i className="fa fa-instagram"></i>
          </a>
          <a>
            <i className="fa fa-twitter"></i>
          </a>
          <a>
            <i className="fa fa-telegram"></i>
          </a>
        </section>
        <section>
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>About us</Link>
          <Link to={"/"}>Order</Link>
          <Link to={"/"}>Retail</Link>
          <Link to={"/"}>Member</Link>
          <Link to={"/"}>Contact Us</Link>
        </section>
      </div>
      <div className="copyright">
        Copyright © 2021 websitename - All rights reserved
      </div>
    </footer>
  );
};

export default Footer;

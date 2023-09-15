import React from "react";

const ContactLinks = () => {
  return (
    <div className="contact-links">
      <div className="social-links">
        <a href="/#">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="/#">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="/#">
          <i class="fa-brands fa-youtube"></i>
        </a>
      </div>
      <div className="contact">
        <a href="/#">
          <span>
            <i className="fa-solid fa-envelope"></i>
          </span>
          <span>info@gmail.com</span>
        </a>
      </div>
      <div className="contact">
        <a href="/#">
          <span>
            <i className="fa-solid fa-phone"></i>
          </span>
          <span>+994 50 999 99 99</span>
        </a>
      </div>
    </div>
  );
};
export default ContactLinks;

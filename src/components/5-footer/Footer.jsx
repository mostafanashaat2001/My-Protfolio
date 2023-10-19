import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <p>© 2023 Made By Mostafa Nashaat</p>
    </footer>
  );
};

export default Footer;

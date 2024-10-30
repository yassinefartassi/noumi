import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Add event listener to detect clicks outside the navbar
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="#produit">Produits</a>
        </li>
        <li>
          <button className="contact-btn">Nos Contacter</button>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;

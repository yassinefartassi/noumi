import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
            <div className="footer-links">
                <a href="/about">About Us</a>
                <a href="/products">Products</a>
                <a href="/contact">Contact</a>
                <a href="/privacy">Privacy Policy</a>
            </div>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/nihou_nihou/profilecard/?igsh=cjR3ZXp1ejUyM3Bz" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
            <p className="footer-text">&copy; {new Date().getFullYear()} Dattes. All rights reserved.</p>
        </div>
    </footer>
    );
};

export default Footer;

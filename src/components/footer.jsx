import React from 'react';
import '../styles/footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = ({Id}) => {
    return (
        <footer className="footer" id={Id}>
            <div className="footer-container">

                <div className="footer-brand">
                <h1>Kanhaiya Tyagi</h1>
                <p>Thanks for visiting my portfolio!</p>
                </div>

                <div className="footer-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#intro">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                </div>

                <div className="footer-contact" id="contact">
                    <h3>Contact</h3>
                    <div className="social-icons">
                        <a href="https://github.com/kanhaiya-tyagi" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://linkedin.com/in/kanhaiya-tyagi" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="mailto:kanhaiya.tyagi.2006@gmail.com"><FaEnvelope /></a>
                        <a href="https://instagram.com/kanhaiya__tyagi" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://x.com/Kanhaiya__Tyagi" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Kanhaiya Tyagi. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
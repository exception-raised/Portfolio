import React from 'react';
import './style.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Header() {
    return (
        <header className="header text-center d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-3 animate-fade-in">
                Daniel Immelman <span className="emoji">👨‍💻</span>
            </h1>
            <p className="lead animate-slide-up">Full Stack Developer | Open Source Enthusiast</p>
            <div className="social-icons animate-fade-in">
                <a href="https://github.com/exception-raised" className="social-link" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/daniel-immelman-a7a64b299/" className="social-link" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://leetcode.com/exception-raised/" className="social-link" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode />
                </a>
            </div>
        </header>
    );
}

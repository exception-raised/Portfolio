import React from 'react';
import { BsStackOverflow } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
    
    return (
        <footer className="footer bg-dark text-white text-center py-4">
            <div className="container">
                <h5>Let's Connect</h5>
                <div className="social-icons my-3">
                    <a href="https://github.com/exception-raised" className="text-white mx-2">
                        <FaGithub size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/daniel-immelman-a7a64b299/" className="text-white mx-2">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://leetcode.com/exception-raised/" className="text-white mx-2">
                        <SiLeetcode size={30} />
                    </a>
                    <a href="https://stackoverflow.com/users/27669776/exception-raised" className="text-white mx-2">
                        <BsStackOverflow size={30} />
                    </a>
                </div>
                <p>© 2024 Daniel Immelman. All rights reserved.</p>
            </div>
        </footer>
    );
}

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    const iconStyle = { color: '#007bff', size: '2em' }; // Example style
    
    return (
        <footer className="footer bg-dark text-white text-center py-4">
            <div className="container">
                <h5>Let's Connect</h5>
                <div className="social-icons my-3">
                    <a href="https://github.com/exception-raised" className="text-white mx-2">
                        <FaGithub size={30} />
                    </a>
                    <a href="https://linkedin.com/in/yourlinkedin" className="text-white mx-2">
                        <FaLinkedin size={30} />
                    </a>
                </div>
                <p>© 2024 Daniel Immelman. All rights reserved.</p>
            </div>
        </footer>
    );
}

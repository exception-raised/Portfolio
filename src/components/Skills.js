import React from 'react';
import { CgCPlusPlus } from 'react-icons/cg';
import { FaJs, FaReact, FaNodeJs, FaDocker, FaPython } from 'react-icons/fa';

export default function Skills() {
    const skills = [
        { name: 'JavaScript', icon: <FaJs color="#f0db4f" size="2em" /> },
        { name: 'React', icon: <FaReact color="#61dafb" size="2em" /> },
        { name: 'Node.js', icon: <FaNodeJs color="#68a063" size="2em" /> },
        { name: 'Docker', icon: <FaDocker color="#0db7ed" size="2em" /> },
        { name: 'C++', icon: <CgCPlusPlus color="#00599C" size="2em" /> },
        { name: 'Python', icon: <FaPython color="#306998" size="2em" /> }
    ];

    return (
        <section className="container text-center my-5" id="skills">
            <h2 className="mb-4 text-white">Skills</h2>
            <div className="row">
                {skills.map((skill, idx) => (
                    <div className="col-md-4" key={idx}>
                        <div className="skill-box p-4 border shadow-lg mb-4 rounded " 
                             style={{ 
                                 backgroundColor: '#212529', 
                                 transition: 'transform 0.2s', 
                                 cursor: 'pointer' 
                             }}
                             onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                             onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <div className="icon mb-3">{skill.icon}</div>
                            <h5 className='text-white'>{skill.name}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

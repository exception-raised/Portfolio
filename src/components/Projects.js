import React from 'react';
import { FaNode, FaReact, FaRust, FaDocker } from 'react-icons/fa';
import { FaC, FaGear } from 'react-icons/fa6';
import { TbSql } from 'react-icons/tb';


export default function Projects() {
    const projects = [
        {
            title: 'Blogger',
            description: 'A blogging website built with ReactJS, PostgreSQL, and NodeJS.',
            link: 'https://github.com/exception-raised/Blogger', 
            icons: [
                <FaNode color="#68A063" size="2.5em" />,    
                <FaReact color="#61DBFB" size="2.5em" />,   
                <TbSql color="#f29111" size="2.5em" />,     
                <FaDocker color="#2496ED" size="2.5em" />   
            ]
        },
        {
            title: 'ChessFair',
            description: 'Program that scours the official Chess.com official API to find banned users that you played against.',
            link: 'https://github.com/exception-raised/chessfair', 
            icons: [
                <FaNode color="#68A063" size="2.5em" />     
            ]
        },
        {
            title: 'LeetCodeDailyNotifier',
            description: 'Notifies you  via email once a new daily Leetcode problem has been released.',
            link: 'https://github.com/exception-raised/DailyChallengeNotifier', 
            icons: [
                <FaRust color="#DEA584" size="2.5em" />  
            ]
        },
        {
            title: 'StringReverser',
            description: 'A simple string reversing tool written in x86 assembly.',
            link: 'https://github.com/exception-raised/StringReverser', 
            icons: [
                <FaGear color="#6c757d" size="2.5em" />,
                <FaC color="#61DBFB" size="2.5em" />
            ]
        }
    ];
    
    return (
        <section className="container text-center my-5" id="projects">
            <h2 className="mb-4 text-white">Projects</h2>
            <div className="row ">
                {projects.map((project, idx) => (
                    <div className="col-md-4" key={idx}>
                        <div className="project-box p-3 p-4 border shadow-lg mb-4 rounded"
                            style={{ 
                                    backgroundColor: '#f8f9fa', 
                                    transition: 'transform 0.2s', 
                                    cursor: 'pointer' 
                                }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                            <h5>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                                    {project.title}
                                </a>
                            </h5>
                            <p>{project.description}</p>
                            <div className="icons d-flex justify-content-center">
                                {project.icons.map((icon, iconIdx) => (
                                    <span key={iconIdx} className="mx-2">{icon}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
    
}

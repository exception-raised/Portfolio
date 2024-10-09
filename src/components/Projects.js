import React from 'react';

export default function Projects() {
    const projects = [
        { title: 'Project One', description: 'A cool project about X.' },
        { title: 'Project Two', description: 'A fantastic project about Y.' },
        { title: 'Project Three', description: 'An awesome project about Z.' },
    ];

    return (
        <section className="container text-center my-5" id="projects">
            <h2 className="mb-4">Projects</h2>
            <div className="row">
                {projects.map((project, idx) => (
                    <div className="col-md-4" key={idx}>
                        <div className="project-box p-3 border">
                            <h5>{project.title}</h5>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

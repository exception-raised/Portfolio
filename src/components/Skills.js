import React from 'react';

export default function Skills() {
    const skills = ['JavaScript', 'React', 'Node.js', 'Docker', 'C++', 'Python'];

    return (
        <section className="container text-center my-5" id="skills">
            <h2 className="mb-4">Skills</h2>
            <div className="row">
                {skills.map(skill => (
                    <div className="col-md-4" key={skill}>
                        <div className="skill-box p-3 border">
                            <h5>{skill}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

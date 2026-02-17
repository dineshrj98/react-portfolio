import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import { FaGithubAlt } from "react-icons/fa";
import { BiCookie } from "react-icons/bi";

export default function Projects() {
    return (
        // Projects section
        <section id='githubportfolio'>
            {/* Section heading */}
            <h5>My Recent Works</h5>
            <h2>Github and Hobbies</h2>
            {/* Projects container */}
            <div className="project" id='project'>
                <div className="projects">
                    {/* Project One */}
                    <div className="project-one card">
                        {/* Project header */}
                        <div className="card-header">
                            {/* GitHub icon */}
                            <span><FaGithubAlt /></span>
                            <h3>Github Portfolio</h3>
                        </div>
                        {/* Project description */}
                        <div className="card-text">
                            <p>An API fetch of my GitHub Portfolio, with a page showing a list of my repositories.</p>
                        </div>
                        {/* Project link */}
                        <div className="card-link">
                            {/* Link to GitHub portfolio */}
                            <Link to='/github'>Visit site</Link>
                        </div>
                    </div>
                    {/* Project Two */}
                    <div className="project-two card">
                        {/* Project header */}
                        <div className="card-header">
                            {/* Cookie icon */}
                            <span><BiCookie /></span>
                            <h3>Recipe Search Bar</h3>
                        </div>
                        {/* Project description */}
                        <div className="card-text">
                            <p>A single page with the implementation of Recipe Search Bar.</p>
                        </div>
                        {/* Project link */}
                        <div className="card-link">
                            {/* Link to Recipe Search Bar */}
                            <Link to='/recipesearch'>Visit site</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

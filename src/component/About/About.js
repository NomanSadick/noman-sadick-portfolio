import React from 'react';
import './About.css'
import profilePicture from "../../image/Noman.jpg";
const About = () => {
    return (
        <div className="about container-fluid" id="about">
            <h1 className= "title">ABOUT</h1>
            <div className="about-main row">
                <div className="profile-pic col-md-5">
                    <img src={profilePicture} alt="" />
                </div>
                <div className="about-content col-md-5">
                    <h1>Technical Skills</h1>
                    <p>I’m a passionate web app developer. I can provide clean code. I was dedicated to giving my full effort for completing my projects and I have completed them. I create more interactive websites with web animations.</p>
                </div>
                
            </div>
        </div>
    );
};

export default About;
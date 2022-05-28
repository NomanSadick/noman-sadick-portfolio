import React from 'react';
import header from "../../image/header/header.jpg";
import './Header.css'
const Header = () => {
    return (
        <div className="header container-fluid" id="home">
            <div className="overlay row ">
                <div className="header__content col-md-5">
                    <p>Hello I'm</p>
                    <h1>Noman Sadick</h1>
                    <h5>A MERN Stack Developer</h5>
                    <a
                        className="resume__btn"
                        target="_blank"
                        rel="noreferrer"
                        href="https://drive.google.com/file/d/1SF_y75B__sihvB2KPUYvfbOeN0nCLNqn/view?usp=sharing"
                    >
                        Download Resume
                    </a>
                </div>
                <div className="col-md-5">
                    <img className="photoUrl" src={header} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;
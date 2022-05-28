import React from 'react';
import './Footer.css'
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const Footer = () => {
    return (
        <footer id="Footer" className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="social">
                        <a href="https://github.com/NomanSadick">

                            <GitHubIcon />
                        </a>
                        <a href="https://www.linkedin.com/in/noman-sadick/">

                            <LinkedInIcon />
                        </a>
                        <a href="https://web.facebook.com/johanjs2/">

                            <FacebookIcon />
                        </a>
                    </div>
                    <p className="copyright">
                        <span style={{ color: "gray!important" }}>
                            Copyright © 2020 Noman Sadick Rights Reserved
                        </span>{" "}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
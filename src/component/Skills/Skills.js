import React from 'react';
import "./Skills.css";
import image1 from "../../image/skills/bootstrap.jpg";
import image2 from "../../image/skills/Css.jpg";
import image3 from "../../image/skills/material-ui.png";
import image4 from "../../image/skills/HTML5-Ads.jpg";
import image5 from "../../image/skills/javascript.jpg";
import image6 from "../../image/skills/react.jpg";
import image7 from "../../image/skills/redux.png";
import image8 from "../../image/skills/mongoDB.png";
import image9 from "../../image/skills/node.png";

const Skills = () => {
    return (
        <div id="skill">
        <div className="skills_overlay">
          <h2 className="section__heading">Skills</h2>
          <div className="container">
            <div className="skill_scroll-box">
              <div className="skill_box">
                <span style={{ "--i": 1 }}>
                  <img src={image1} alt="" />
                </span>
                <span style={{ "--i": 2 }}>
                  <img src={image2} alt="" />
                </span>
                <span style={{ "--i": 3 }}>
                  <img src={image3} alt="" />
                </span>
                <span style={{ "--i": 4 }}>
                  <img src={image4} alt="" />
                </span>
                <span style={{ "--i": 5 }}>
                  <img src={image5} alt="" />
                </span>
                <span style={{ "--i": 6 }}>
                  <img src={image6} alt="" />
                </span>
                <span style={{ "--i": 7 }}>
                  <img src={image7} alt="" />
                </span>
                <span style={{ "--i": 8 }}>
                  <img src={image8} alt="" />
                </span>
                <span style={{ "--i": 9 }}>
                  <img src={image9} alt="" />
                </span>
              </div>
            </div>
            <div className="skill_content-box">
            <div className="skill_set">
              <h2 className="skill_heading">Frontend</h2>
              <h4>html5</h4>
              <h4>Css3</h4>
              <h4>React</h4>
              <h4>Javascript</h4>
              <h4>Bootstrap</h4>
              <h4>Material ui</h4>
            </div>
            <div className="skill_set">
              <h2 className="skill_heading">Backend</h2>
              <h4>Node.js</h4>
              <h4>Express.js</h4>
              <h4>MongoDB</h4>
              <h4>Mongoose</h4>
              <h4>Multer</h4>
              <h4>JWT decoded</h4>
            </div>
            <div className="skill_set">
              <h2 className="skill_heading">Tools</h2>
              <h4>Vs Code</h4>
              <h4>Git & Github</h4>
              <h4>Netlify</h4>
              <h4>Heroku</h4>
              <h4>Chrome Dev tool</h4>
              <h4>Firebase</h4>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
};

export default Skills;
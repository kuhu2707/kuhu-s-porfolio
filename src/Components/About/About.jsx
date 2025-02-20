//import React from 'react'
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile2 from "../../assets/profile2.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile2} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate Full Stack Developer and AI/ML enthusiast with
              experience in MERN stack, Python, and data science. I have worked
              on projects ranging from e-commerce platforms and music
              recommendation systems to data visualization dashboards.
              </p>
              <p>
                I thrive on building scalable applications and love
                problem-solving in web development and AI/ML. My expertise
                includes React, Node.js, MongoDB, Express, Python, and data
                visualization tools like Power BI and Tableau.
              </p>
            <p>
              My goal is to create impactful digital solutions while
              continuously learning and growing in the tech space.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>FRESHER</h1>
          {/* <p>YEARS OF EXPERIENCE</p> */}
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        {/* <hr /> */}
        {/* <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div> */}
      </div>
    </div>
  );
};

export default About;

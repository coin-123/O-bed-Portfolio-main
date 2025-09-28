import React from "react";
import "./intro.css";
import bg from "../../asset/obed.png";
import hiremeimg from "../../asset/hire-me.png";
import { Link } from "react-scroll";


const Intro = () => {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello">👋 Hello,</span>
        <span className="introtext">
          I'm <span className="introname">O'bed</span>
          <br />
          <span className="intro-title">Software Engineer</span>
        </span>
        <p className="intropara">
          Passionate about building <strong>visually appealing</strong> and <strong>user-friendly</strong> web interfaces.<br />
          Let's create something amazing together!
        </p>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <button className="btn hireme-btn">
            <img src={hiremeimg} alt="Hire Me" className="hiremeimg" />
            <span>Hire Me</span>
          </button>
        </Link>
      </div>
      <div className="intro-image-wrapper">
        <img src={bg} alt="Profile" className="bg" />
      </div>
    </section>
  );
};

export default Intro;

import React from "react";
import "./intro.css";
import bg from "../../asset/obed.png";
import hiremeimg from "../../asset/hire-me.png";
import { Link } from "react-scroll";


const Intro = () => {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello">Hello,</span>
        <span className="introtext">
          I'm <span className="introname">O'bed</span> <br /> Website Designer
        </span>
        <p className="intropara">
          I am a skilled web designer with experience in creating <br />
          visual appealing and user freindly websites
        </p>
        <Link
           activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <button className="btn">
            {" "}
            <img src={hiremeimg} alt="" className="hiremeimg" /> Hire Me
          </button>{" "}
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;

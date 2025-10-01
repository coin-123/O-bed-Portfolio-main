import React from "react";
import "./works.css";
// import Logo7 from '../../asset/logo7.png';
// import Logo2 from '../../asset/logo2.png';
// import Logo3 from '../../asset/logo3.png';
// import Logo4 from '../../asset/logo4.png';
// import Logo5 from '../../asset/logo5.png';
// import Logo6 from '../../asset/logo6.png';

const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="workdes">
        Explore a selection of my recent projects, showcasing my expertise in
        building responsive, user-centric web applications. Each project
        highlights my commitment to clean code, modern design, and seamless user
        experiences.
      </span>

      <div className="workimgs">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="work-link"
        >
          https://obed-portfolio.vercel.app/
        </a>

        <a
          href="https://streethub-academy-landingpage.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="work-link"
        >
          https://streethub-academy-landingpage.vercel.app/
        </a>

        <a
          href="https://e-cormmce.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="work-link"
        >
          https://e-cormmce.vercel.app/
        </a>

        {/* <img src={Logo7} alt="" className="workimg" />
        <img src={Logo2} alt="" className="workimg" />
        <img src={Logo3} alt="" className="workimg" />
        <img src={Logo4} alt="" className="workimg" />
        <img src={Logo5} alt="" className="workimg" />
        <img src={Logo6} alt="" className="workimg" /> */}
      </div>
      {/* <button className="workbtn">
        See More
      </button> */}
    </section>
  );
};
export default Works;

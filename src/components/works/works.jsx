import React from 'react'
import './works.css';
import Logo7 from '../../asset/logo7.png';
import Logo2 from '../../asset/logo2.png';
import Logo3 from '../../asset/logo3.png';
import Logo4 from '../../asset/logo4.png';
import Logo5 from '../../asset/logo5.png';
import Logo6 from '../../asset/logo6.png';

const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">
        My Portfolio
      </h2>
      <span className="workdes">
        I am a skilled and passionate Software Engineer with experience in creating visually appealing and user friendly web interface.
      </span>
      <div className="workimgs">
        <img src={Logo7} alt="" className="workimg" />
        <img src={Logo2} alt="" className="workimg" />
        <img src={Logo3} alt="" className="workimg" />
        <img src={Logo4} alt="" className="workimg" />
        <img src={Logo5} alt="" className="workimg" />
        <img src={Logo6} alt="" className="workimg" />
      </div>
      <button className="workbtn">
        See More
      </button>
    </section>
  )
}
export default Works

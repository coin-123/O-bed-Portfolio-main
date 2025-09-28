import React from 'react';
import './skills.css';
import uiux from '../../asset/uiux.png';
import webdesign from '../../asset/diary.avif';
import appdesign from '../../asset/phone.png';

const Skills = () => {
  return (
    <section id="skills">
      <span className="skilltitle">
        What I Do
      </span>
      <span className="skilldes">
        I am a dedicated Software Engineer specializing in building modern, responsive, and user-centric web applications. My expertise spans UI/UX design, website development, and mobile app interfaces, ensuring seamless and engaging digital experiences.
      </span>
      <div className="skillbars">
        <div className="skillbar">
          <img src={uiux} alt="UI/UX Design" className="skillbarimg" />
          <div className="skillbartext">
            <h2>UI/UX Design</h2>
            <p>
              I design intuitive and visually appealing user interfaces, focusing on delivering seamless user experiences that align with business goals and user needs.
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img src={webdesign} alt="Website Design" className="skillbarimg" />
          <div className="skillbartext">
            <h2>Website Design</h2>
            <p>
              I develop responsive and high-performance websites using modern technologies, ensuring accessibility, scalability, and a strong online presence.
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img src={appdesign} alt="App Design" className="skillbarimg" />
          <div className="skillbartext">
            <h2>App Design</h2>
            <p>
              I create engaging and user-friendly mobile app interfaces, focusing on usability and consistency across platforms for an optimal user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills


import React from 'react';
import './skills.css';
import uiux from '../../asset/uiux.png';
import webdesign from '../../asset/diary.avif';
import appdesign from '../../asset/phone.png';

const Skills = () => {
  return (
    <section id="skills">
      <span className="skilltitle">
        What I do
      </span>
      <span className="skilldes">I am a skilled and passionate Software Engineer with experience in creating visually appealing and user friendly web apllications.</span>
      <div className="skillbars">
        <div className="skillbar">
          <img src={uiux} alt="uiux" className="skillbarimg" />
          <div className="skillbartext">
            <h2>UI/UX Design</h2>
            <p>This is a demo text,you can write your own content here</p>
          </div>
        </div>
          <div className="skillbar">
          <img src={webdesign} alt="webdesign" className="skillbarimg" />
          <div className="skillbartext">
              <h2>Website Design</h2>
            <p>This is a demo text,you can write your own content here</p>
          </div>
        </div>

          <div className="skillbar">
          <img src={appdesign} alt="appdesign" className="skillbarimg" />
          <div className="skillbartext">
             <h2>AppDesign</h2>
            <p>This is a demo text,you can write your own content here</p>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Skills


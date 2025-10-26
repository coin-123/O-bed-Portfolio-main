import React from "react";
import "./navbar.css";
import logo from "../../asset/obed.c.jpg";
import contactme from "../../asset/phone.png";
import { Link } from "react-scroll";
import { useState } from "react";
// import menu from "../../asset/menu.png";

const Navbar = () => {
  const [showmenu, setshowmenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopmenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopmenulistiterms"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopmenulistiterms"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopmenulistiterms"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopmenulistiterms"
        >
          Clients
        </Link>
      </div>
      <button
        className="desktopmenubtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactme} alt="" className="desktopmenuicon" />
        Contact me
      </button>

      <div className=" mobmenu " onClick={() => setshowmenu(!showmenu)}>
        <span className=""></span>
        <span className=""></span>
        <span className=""></span>
      </div>

{/* Mobile section */}


      {/* <img src={menu} alt="menu" className="mobmenu" onClick={()=>setshowmenu(!showmenu)} /> */}
      <div className="navmenu" style={{ display: showmenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listiterms"
          onClick={() => setshowmenu(false)}
        >
          
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listiterms"
          onClick={() => setshowmenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listiterms"
          onClick={() => setshowmenu(false)}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listiterms"
          onClick={() => setshowmenu(false)}
        >
          Clients
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listiterms"
          onClick={() => setshowmenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

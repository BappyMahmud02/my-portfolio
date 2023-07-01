import React from 'react';
import './Footer.css'
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
        <img src={Wave} alt="" style={{ width: "100%" }} />
        <div className="f-content">
          <span>bappymahmud321@gmail.com</span>
          <div className="f-icons">
            <Insta color="white" size={"3rem"} />
            <NavLink to='https://www.facebook.com/bappymahmud000'><Facebook color="white" size={"3rem"} /></NavLink>
            <NavLink to='https://github.com/BappyMahmud02'><Gitub color="white" size={"3rem"} /></NavLink>
          </div>
        </div>
      </div>
    );
};

export default Footer;
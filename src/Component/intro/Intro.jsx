import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Intro.css'
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from '../floatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion'

const Intro = () => {
    // Transition
    const transition = { duration: 2, type: "spring" };

    const theme = useContext(themeContext)
    const darkMood = theme.state.darkMood;
    return (
        <div className="Intro container mx-auto" id="Intro">
            {/* left name side */}
            <div className="i-left">
                <div className="i-name">
                    {/* yahan change hy darkmode ka */}
                    <span style={{ color: darkMood ? "white" : "" }}>Hy! I Am</span>
                    <span>Bappy Mahmud</span>
                    <span>
                        Frontend Developer with high level of experience in web designing
                        and development, producting the Quality work
                    </span>
                </div>
                <Link to="contact" smooth={true} spy={true}>
                    <button className="button i-button">Hire me</button>
                </Link>
                {/* social icons */}
                <div className="i-icons">
                    <Link>
                        <img src={Github} alt="" />
                    </Link>
                    <Link>
                        <img src={LinkedIn} alt="" />
                    </Link>
                    <Link>
                        <img src={Instagram} alt="" />
                    </Link>
                </div>
            </div>
            {/* right image side */}
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassesimoji} alt="" />

                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}

                    style={{ top: "-4%", left: "52%" }} >
                    
                    <FloatingDiv img={crown} text1="Web" text2="Developer" />
                </motion.div>

                {/* animation */}
                <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    
                    style={{ left: "0rem", top: "18rem" }}
                    >
                        <FloatingDiv img={thumbup} text1="Best Design" text2="Award" />
                    </motion.div>

                
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div
                    className="blur"
                    style={{
                        background: "#C1F5FF",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Intro;
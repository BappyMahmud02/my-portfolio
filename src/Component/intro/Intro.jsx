import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Intro.css'
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/me.png";
import { themeContext } from '../../Context';
import Typed from 'react-typed';
import Resume from './Resume of Bappy.pdf';
import { motion } from 'framer-motion';


const Intro = () => {
    // Transition
    const transition = { duration: 2, type: "spring" };

    const theme = useContext(themeContext)
    const darkMood = theme.state.darkMood;
    return (
        <div className="Intro container mx-auto" id="Intro">
            {/* left name side */}
            <motion.div
                initial={{ left: '-16%' }}
                whileInView={{ left: "1%" }}
                transition={transition} className="i-left">
                <div className="i-name">
                    {/* yahan change hy darkmode ka */}
                    <span style={{ color: darkMood ? "white" : "" }}>Hey! I Am</span>
                    <span>Bappy Mahmud</span>
                    <span>
                        <Typed
                            strings={[
                                'I Am a Web Developer',
                                'I Am a Full Stack Developer',
                                'I Am a Frontend Developer']}
                            typeSpeed={40}
                            backSpeed={50}

                            loop >

                        </Typed>
                    </span>
                </div>
                <a href={Resume} download>
                    <button className="button  b-button">Download CV</button>
                </a>
                {/* social icons */}
                <div className="i-icons">
                    <Link to='https://github.com/BappyMahmud02' target='blank'>
                        <img src={Github} alt="" />
                    </Link>
                    <Link to='https://www.linkedin.com/in/bappy-mahmud-47667a258/'>
                        <img src={LinkedIn} alt="" />
                    </Link>
                    <Link>
                        <img src={Instagram} alt="" />
                    </Link>
                </div>
            </motion.div>
            {/* right image side */}
            <motion.div
                initial={{ right: '-16%' }}
                whileInView={{ left: "1%" }}
                transition={transition} className="i-right">

                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img className='h-[400px]' src={boy} alt="" />

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
            </motion.div>
        </div>
    );
};

export default Intro;
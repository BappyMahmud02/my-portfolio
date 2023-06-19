import React, { useContext } from 'react';
import './Service.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import html from '../../img/html-logo (1).png'
import js from '../../img/javascript-logo.png'
import tailwind from '../../img/tailwind-css (1).png'
import react from '../../img/react.png'
import bootstrap from '../../img/bootstrap-framework-logo.png'
import nodejs from '../../img/nodejs.png'
import mongodb from '../../img/mongodb.png'
import Card from '../card/Card';
import Resume from './resume.pdf';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion'


const Service = () => {
    const theme = useContext(themeContext)
    const darkMood = theme.state.darkMood;

    // transition
    const transition = {
        duration: 1,
        type: "spring",
    };
    return (
        <div className="services container mx-auto  font-semibold" id='Services' >
            {/* left side */}
            <div className="awesome mt-16 ">
                {/* dark mode */}
                <span className='' style={{ color: darkMood ? "white" : "" }}>My Awesome</span>
                <span >services</span>
                <spane>
                    Lorem ispum is simpley dummy text of printing of printing Lorem
                    <br />
                    ispum is simpley dummy text of printing
                </spane>
                <a href={Resume} download>
                    <button className="button  b-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right  side*/}
            <div className="cards ">
                
                    <motion.div 
                        whileInView={{ left: "14rem" }}
                        initial={{ left: "25rem" }}
                        transition={transition}

                        style={{ left: '14rem' }}>
                        <Card

                            html={html}
                            bootstrap={bootstrap}
                            js={js}
                            tailwind={tailwind}
                            nodejs={nodejs}
                            mongodb={mongodb}
                            react={react}
                            heading={"Design"}

                        />
                    </motion.div>
                
                {/* second card */}
                {/* <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                    style={{ top: '12rem', left: '30rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"Html, Css, JavaScript, React, Nodejs, Express"}
                    />
                </motion.div> */}
                {/* Third card */}
                {/* <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                    style={{ top: '29rem', left: '54rem' }}>
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={
                            "Lorem ispum dummy text are usually use in section where we need some random text"
                        }
                        color="rgba(252, 166, 31, 0.45)"
                    />
                </motion.div> */}
                <div
                    className="blur s-blur2"
                    style={{ background: "var(--purple)" }}
                ></div>
            </div>
        </div>
    );
};

export default Service;
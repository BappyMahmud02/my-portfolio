import React, { useContext } from 'react';
import './Service.css'
import html from '../../img/html-logo (1).png'
import js from '../../img/javascript-logo.png'
import tailwind from '../../img/tailwind-css (1).png'
import react from '../../img/react.png'
import bootstrap from '../../img/bootstrap-framework-logo.png'
import nodejs from '../../img/nodejs.png'
import firebase from '../../img/firebase.png'
import git from '../../img/git.png'
import mongodb from '../../img/mongodb.png'
import Card from '../card/Card';
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
                I am very comfortable with this tools
                    <br />
                    ispum is simpley dummy text of printing
                </spane>
                
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right  side*/}
            <div className="cards ">

                     <motion.div

                        whileInView={{ left: "19rem" }}
                        initial={{ left: "29rem" }}
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
                            firebase={firebase}
                            git={git}


                        />
                    </motion.div>
                
                <div
                    className="blur s-blur2"
                    style={{ background: "var(--purple)" }}
                ></div>
            </div>
        </div>
    );
};

export default Service;
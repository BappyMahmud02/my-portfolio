import React, { useContext } from 'react';
import './Portfolio.css'
import { Swiper, SwiperSlide } from "swiper/react"
import toystar from "../../img/Screenshot_13.png";
import Besteats from "../../img/Screenshot_14.png";
import BdHub from "../../img/bdhub.png";
import MusicApp from "../../img/musicapp.png";
import "swiper/css";
import { themeContext } from '../../Context';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';


const Portfolio = () => {
    const theme = useContext(themeContext)
    const darkMood = theme.state.darkMood;
    return (
        <div className="portfolio container mx-auto " id="portfolio">
            {/* heading */}
            <span style={{ color: darkMood ? 'white' : '' }}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
                spaceBetween={10}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={toystar} alt="" />
                <div className='pt-4 text-center'>
                    <NavLink to='https://toy-stars-a0fb0.web.app/' target='blank'><button className="btn btn-error">Live Site</button></NavLink>
                    <NavLink to='https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-BappyMahmud02' target='blank'><button className="btn btn-error ms-4">Client side Site</button></NavLink>
                </div>
                </SwiperSlide>


                <SwiperSlide>
                    <img src={Besteats} alt="" />
                <div className='pt-4 text-center'>
                    <NavLink to='https://chef-recipe-special.web.app/' target='blank'><button className="btn btn-error">Live Site</button></NavLink>
                    <NavLink to='https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-BappyMahmud02/tree/main/src' target='blank'><button className="btn btn-error ms-4">Client side Site</button></NavLink>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={BdHub} alt="" />
                    <div className='pt-4 text-center'>
                    <NavLink to=' https://inquisitive-clafoutis-1ed434.netlify.app/' target='blank'><button className="btn btn-error">Live Site</button></NavLink>
                    <NavLink to='https://github.com/Porgramming-Hero-web-course/b7a9-career-hub-BappyMahmud02' target='blank'><button className="btn btn-error ms-4">Client side Site</button></NavLink>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;
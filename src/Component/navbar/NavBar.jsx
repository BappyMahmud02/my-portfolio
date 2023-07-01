import React from 'react';
import './NavBar.css';
import Toggle from '../toggle/Toggle';
import {Link} from 'react-scroll'

const NavBar = () => {
    return (
        <div className="n-wrapper mt-4 
        container mx-auto" id="Navbar">
            {/* left */}
            <div className="n-left">
                <div className="n-name">Bappy</div>
                <Toggle/>
            </div>
            {/* right */}
            <div className="n-right ">
                <div className="n-list text-2xl font-semibold">
                    <ul style={{ listStyleType: "none" }}>
                        <li>
                            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="services" spy={true} smooth={true}>
                                Serivces
                            </Link>
                        </li>
                        <li>
                            <Link to="works" spy={true} smooth={true}>
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link to="portfolio" spy={true} smooth={true}>
                                Protfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="testimonial" spy={true} smooth={true}>
                                Testimonial
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link to="contact" spy={true} smooth={true}>
                    <button className="button n-button">Contact</button>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;